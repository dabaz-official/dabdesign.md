# 用 OKLCH 定义 DabWave 品牌色 — 操作教程

**适用对象：** DabWave 的每个站点（DabAZ 官网、DabMusic、DabSudoku、DabMinesweeper…）
**前提：** core 里已经定了 10 步固定 L 阶梯、C 倍率曲线、五个语义别名（`DabDesign.md` §4.4，DAB-003 已批准）。
**配套脚本：** `scripts/oklch-ramp.mjs`（零依赖，Node 18+）。

> 本教程回答一个问题：**拿到一个站点，怎么从零得出它的品牌色阶和五个语义别名，并且能通过对比度校验。**

---

## 0. 三分钟理解 OKLCH

OKLCH 把一个颜色拆成三个维度：

| 维度 | 含义 | 范围 | 你需要决定的 |
|---|---|---|---|
| **L** | 感知明度 | 0–1 | 不需要。core 已固定 10 个值 |
| **C** | 彩度（鲜艳程度） | 0 到约 0.37（随色相变化） | 需要。每个站点一个基准值 |
| **H** | 色相角 | 0–360 | 需要。每个站点一个值 |

CSS 写法：`oklch(0.56 0.16 260)` = 明度 0.56、彩度 0.16、色相 260°（蓝）。

为什么不用 HSL：HSL 的"50%"明度在黄色和蓝色上看起来完全不同亮度，导致每个色相的色阶都要手调。OKLCH 的 L 是感知均匀的，所以**同一组 L 值可以用于所有色相**——这正是"所有站点共用一个骨架、只换色相"的基础。

好用的工具：

- [oklch.com](https://oklch.com) — 可视化取值、hex 与 OKLCH 互转。
- Chrome/Edge DevTools 的颜色选择器 — 直接切换 oklch 模式。
- 本仓库的 `scripts/oklch-ramp.mjs` — 批量生成 + 校验。

---

## 1. 第一步：确定色相 H

H 是每个站点唯一的"性格参数"。三种来源：

### 来源 A：已有品牌色（logo、现有网站主色）

把品牌色的 hex 转成 OKLCH，**只取它的 H**，忽略它的 L 和 C：

```bash
node scripts/oklch-ramp.mjs --read "#2563EB"
# hex      #2563EB
# oklch    oklch(0.549 0.226 262.9)
# H (hue)  262.9   <- use as --hue
# L        0.549   <- anchor step is the ladder step closest to this
# C        0.226   <- upper bound; use 80–90% of this as --chroma
```

没有 Node 环境时：打开 oklch.com，粘贴 hex，读出 H/L/C 三个数。

### 来源 B：没有品牌色，从产品气质出发

| 产品气质 | H 区间 | 参考 |
|---|---|---|
| 活力、警示、热情 | 0–60 | 红 / 橙 |
| 温暖、明亮、乐观 | 60–90 | 黄 / 琥珀 |
| 自然、健康、成长 | 90–170 | 青柠 / 绿 |
| 清爽、科技、冷静 | 170–210 | 青 / 天蓝 |
| 可信、专业、工具感 | 210–270 | 蓝 |
| 创意、音乐、神秘 | 270–330 | 紫 / 品红 |
| 柔和、亲和 | 330–360 | 粉 |

### 来源 C：从现有网站截图取色

用取色器取页面主按钮或主链接的颜色，再走来源 A 的流程。

### 规则

- **整条 ramp 只用一个 H**，所有 10 步共用。第一版不做 hue shift（不要"亮端偏黄、暗端偏红"），等所有站点跑完一轮后再评估。
- H 记录到小数点后一位即可（如 `262.9`）。
- H 一旦定下并冻结，改 H 属于 core 决策，不是站点随手调。

---

## 2. 第二步：确定锚点步（anchor step）

锚点步是"品牌色住的那一步"，`color-primary` 默认映射到这里。

判断方法：看品牌色的 **L**（`--read` 会输出），找阶梯里最接近的 L：

| 品牌 L 大约是 | 锚点步 | 典型色相 |
|---|---|---|
| 0.70–0.76 | `accent-400` | 黄、琥珀、青柠 |
| 0.62–0.68 | `accent-500` | 橙、亮绿 |
| 0.54–0.60 | `accent-600` | 蓝、紫、深绿、粉红 |
| 0.46–0.52 | `accent-700` | 深蓝、酒红 |
| < 0.42 | 不设锚点 | 近黑品牌色 → `color-primary` 直接映射到 ink（gray-900），accent ramp 只用于链接和选中态 |

规则：

- 锚点只能在 `300–700` 之间。脚本会拒绝范围外的锚点。
- **"品牌色必须在 600"是错的。** 黄色硬放 600 会变成暗芥末色。锚点由明度决定，不由数字决定。
- `color-primary` 不一定等于锚点步——如果锚点步过不了 3:1，脚本会建议往深一步重映射（见第 6 步）。改的是别名映射，不是 L 阶梯。

---

## 3. 第三步：确定基准彩度 C

C 决定这个站点的颜色"有多鲜艳"。

1. 先用 `--read` 看品牌色的 C，这是上限参考。
2. 或者直接试跑：从 `0.16` 开始（大部分色相的安全值），看脚本输出的 `gamut-clamped` 标记。
3. 原则：**基准 C 取该色相在锚点步 sRGB 色域内最大值的 80–90%**，给 hover/pressed 留余地。脚本会对超出色域的步自动降 C（只降 C，不动 L 和 H）。

如果品牌本身就是低饱和的（比如米色、灰蓝），用一个明显偏低的 C 是**合法的**——把它记录下来即可。低饱和的品牌色照样能生成完整 ramp。

---

## 4. 第四步：生成色阶

```bash
node scripts/oklch-ramp.mjs --hue 262.9 --chroma 0.18 --anchor 600
```

脚本会输出四块内容：

1. **10 步色阶表**：每步的 L、目标 C、实际 C（含降彩度标记）、sRGB hex、OKLCH 源值。
2. **亮色主题别名建议**：五个 `color-primary*` 别名各映射到哪一步。
3. **暗色主题别名建议**：同一 ramp 的另一套映射。
4. **对比度报告**：每组关键前景/背景对的实测比值和 pass/FAIL。

所有色值都是脚本算出来的，**不要手改 hex**。对结果不满意时，调的是输入参数（H、C、anchor），不是输出。

---

## 5. 第五步：理解脚本的别名映射逻辑

**亮色主题**（hover/pressed 向深走）：

| 别名 | 默认映射 | 说明 |
|---|---|---|
| `color-primary` | 锚点步 | 若过不了 3:1，自动向深移一步并提示 |
| `color-primary-hover` | primary + 1 步（更深） | |
| `color-primary-pressed` | primary + 2 步（更深） | |
| `color-primary-subtle` | `accent-100` | 文字对比不足时退到 `accent-50` |
| `color-on-primary` | 白 → `accent-50` → ink | 取第一个过 4.5:1 的 |

**暗色主题**（hover/pressed 向浅走，subtle 用深步）：

| 别名 | 默认映射 | 说明 |
|---|---|---|
| `color-primary` | 锚点 − 1 步（更浅） | 若过不了 3:1 继续向浅移 |
| `color-primary-hover` | primary − 1 步（更浅） | |
| `color-primary-pressed` | primary − 2 步（更浅） | |
| `color-primary-subtle` | `accent-900` | 深色 tint 面 |
| `color-on-primary` | 黑 → ink → 白 | 深色文字放在浅 primary 上 |

两条铁律：

- **对比度不过关时，改别名映射，永远不改 L 阶梯。** 脚本的建议就是按这个规则给的。
- 组件只允许使用五个别名，**永远不直接引用 `accent-600` 这类原始步名**。

---

## 6. 第六步：处理 FAIL

脚本报告里出现 FAIL 时的处理顺序：

1. **`primary on background` FAIL**（锚点太浅，比如黄/橙放在 400）：
   - 首选：按脚本提示把 `color-primary` 重映射到更深一步（ramp 不变）。
   - 备选：如果整个 ramp 都偏浅，把 `--anchor` 调深一档重新生成。
2. **`on-primary on primary` FAIL**：脚本会自动在白 / `accent-50` / ink 里选一个能过的；如果三个都不过（极少见），把 `--chroma` 调低一档。
3. **`text on subtle` FAIL**：脚本会退到更浅的 `accent-50`；还不行就降 C。
4. **大量步骤 `gamut-clamped`**：说明基准 C 太高，把 `--chroma` 降 0.02–0.04 再跑，而不是接受大面积降彩度。

每次调整后重跑脚本，直到全部 pass。**最终采用的组合（H + anchor + C + 别名映射）要原样记录**，这是站点主题文档的核心内容。

---

## 7. 第七步：导出 token

脚本输出的 hex 就是交付值。写入站点样式时用 CSS 变量，OKLCH 源值留在文档里：

```css
:root {
  /* 示例输出（hue 262.9 / anchor 600 / C 0.18 的冒烟测试，不是任何站点的决定值）。
     实际使用时用你自己站点脚本输出的 hex 替换。 */
  --accent-50:  #F0F5FF;  /* oklch(0.97 0.014 262.9) */
  --accent-100: #E1ECFF;  /* oklch(0.94 0.029 262.9) */
  /* … */
  --accent-900: #0C2C72;  /* oklch(0.32 0.126 262.9) */

  /* semantic aliases — components may ONLY use these */
  --color-primary: var(--accent-600);
  --color-primary-hover: var(--accent-700);
  --color-primary-pressed: var(--accent-800);
  --color-primary-subtle: var(--accent-100);
  --color-on-primary: #FFFFFF;
}
```

注意：

- token 值用 sRGB hex（兼容层），OKLCH 写在注释和文档里作为源。
- 语义别名指向 accent 步的**变量**，不写死 hex——这样换主题/重映射时只改变量。
- 如果某个站点用 Tailwind，从同一份输出生成 palette 配置，不要手抄第二遍。

---

## 8. 第八步：记录到站点主题文档

每个站点建一份主题文档（例如 `sites/dabaz-theme.md`），记录以下内容。这是站点主题"被批准"的依据：

```markdown
# <Site> Theme

**Status:** Proposed | Approved
**Date:** YYYY-MM-DD

## Accent ramp
- Hue: 262.9
- Anchor step: accent-600
- Base chroma: 0.18
- Method: OKLCH fixed-L ladder (DabDesign.md §4.4), generated by scripts/oklch-ramp.mjs

| Step | OKLCH | Hex |
|---|---|---|
| accent-50 | oklch(0.97 0.018 262.9) | #F2F3FD |
| … | … | … |

## Semantic aliases

| Role | Light | Dark |
|---|---|---|
| color-primary | accent-600 | accent-500 |
| … | … | … |

## Contrast results

| Pair | Ratio | Min | Verdict |
|---|---:|---:|---|
| on-primary on primary | 5.12:1 | 4.5 | pass |
| … | … | … | … |

## Allowed accent uses
primary actions, links, active/selected states, one emphasis element per section.
```

同时回到 `DabDesign.md`：

- §4.5：引用已批准的中性色板（13 步，值在 frontmatter），**不要重写值**。
- §10.1：把实测对比度填进表格，FAIL 就如实写 FAIL。
- §13：如需新值或例外，登记为一个新的 DAB 决策，而不是站点例外。

---

## 9. 重要：中性色板不要用 OKLCH 重新生成

之前讨论中性色板时给过一张 L 表，这里做一个更正和明确：

- `DabDesign.md` §4.5 的 13 级中性灰阶（DAB-004）是**已批准的值**，所有站点共享。直接沿用，不要用 OKLCH 重新生成后再悄悄替换。
- OKLCH 固定 L 阶梯只用于**每个站点自己的 accent ramp**。
- 如果以后想让中性色板也由 OKLCH 生成（比如给灰色加一点品牌温度），那是一个 core 决策：先在 §14 登记、重新走对比度校验、更新 changelog，再替换。

脚本的对比度检查用的就是 DabDesign.md 已批准的中性值（gray-50 背景、gray-0 表面、gray-900 正文、gray-950/900 暗色表面），所以结果和真实主题是一致的。

---

## 10. 全流程 Checklist

- [ ] 用 `--read` 读出品牌色的 H / L / C
- [ ] 确定 H（一个值，记录）
- [ ] 按 L 选锚点步（300–700；近黑品牌色改用 ink）
- [ ] 选基准 C（从 0.16 试起；低饱和品牌用低 C 是合法的）
- [ ] 跑脚本，生成 10 步 ramp
- [ ] 检查 gamut-clamped 数量，必要时调 C 重跑
- [ ] 确认亮色 / 暗色别名映射，处理所有 FAIL
- [ ] 五组对比度全部 pass（FAIL 不许掩盖）
- [ ] 导出 CSS 变量（hex 值 + 别名指向变量）
- [ ] 写站点主题文档（H / anchor / C / ramp / 别名 / 对比度 / 状态）
- [ ] 引用 `DabDesign.md` §4.5 / §10.1（不重写值），新值或例外登记为 DAB 决策
- [ ] 重复下一个站点时，**只换 H（和必要的 anchor/C），L 阶梯和流程不变**

---

## 附：常见错误

| 错误 | 后果 | 正确做法 |
|---|---|---|
| 所有色相都把品牌色放 600 | 黄色变芥末、青色发闷 | 按品牌 L 选锚点 |
| 对比度不过就改 L | 每个站点骨架不同，统一性瓦解 | 改别名映射 |
| 手改脚本输出的 hex | ramp 不再可复现 | 改输入参数重跑 |
| 亮暗主题共用一套别名映射 | 暗色下对比度崩 | 两套映射，同一 ramp |
| 组件直接写 `accent-600` | 换主题要改组件 | 只用五个别名 |
| 用 OKLCH 重做中性色板 | 覆盖了已批准 token | 沿用 DabDesign.md §4.5 中性值，另行提案 |
| 每个站点自己发明 C 曲线 | 色阶质感不一致 | 用同一个脚本和倍率表 |
