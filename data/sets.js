window.MATH_SETS = [
  {
    id: "set-01",
    label: "第 1 组",
    title: "每日数学动脑｜试用版",
    intro: "今天从熟悉的初中数学开始，既有计算，也有推理。先独立想一想，再按需查看解析。",
    questions: [
      {
        type: "心算与巧算",
        problem: '<span class="formula">48<sup class="exponent">2</sup> − 52 × 44 ＝ ？</span>尽量不用竖式，看看能否找到简便方法。',
        answer: '<p><strong>答案：16。</strong></p><p>因为 52 × 44＝(48＋4)(48－4)＝48<sup>2</sup>－4<sup>2</sup>，所以原式＝48<sup>2</sup>－(48<sup>2</sup>－16)＝16。</p>'
      },
      {
        type: "方程",
        problem: '解方程：<span class="formula">(x − 1) / 3 ＋ (x ＋ 2) / 2 ＝ 6</span>',
        answer: '<p><strong>答案：x＝32/5。</strong></p><p>方程两边同乘 6，得 2(x－1)＋3(x＋2)＝36。整理为 5x＋4＝36，所以 x＝32/5。</p>'
      },
      {
        type: "因式分解",
        problem: '把下式分解因式：<span class="formula">x<sup class="exponent">3</sup> − 4x<sup class="exponent">2</sup> − x ＋ 4</span>',
        answer: '<p><strong>答案：(x－4)(x－1)(x＋1)。</strong></p><p>分组：x<sup>2</sup>(x－4)－1(x－4)＝(x－4)(x<sup>2</sup>－1)，再利用平方差公式即可。</p>'
      },
      {
        type: "数列规律",
        problem: '观察数列并写出后面两项：<span class="formula">2，6，12，20，30，____，____</span>再用一句话说明规律。',
        answer: '<p><strong>答案：42，56。</strong></p><p>每一项依次是 1×2、2×3、3×4、4×5、5×6……即第 n 项为 n(n＋1)。也可观察相邻两项之差依次为 4、6、8、10……</p>'
      },
      {
        type: "几何",
        problem: '一个直角三角形的两条直角边分别为 6 和 8。求斜边长度、三角形面积，以及斜边上的高。',
        answer: '<p><strong>答案：斜边 10，面积 24，斜边上的高 24/5（即 4.8）。</strong></p><p>由勾股定理，斜边＝√(6<sup>2</sup>＋8<sup>2</sup>)＝10。面积＝6×8÷2＝24。设斜边上的高为 h，则 10h÷2＝24，故 h＝24/5。</p>'
      },
      {
        type: "应用题",
        problem: '甲、乙两地相距 36 千米。两人同时从两地相向而行，甲每小时走 5 千米，乙每小时走 4 千米。多久相遇？相遇时甲走了多少千米？',
        answer: '<p><strong>答案：4 小时相遇；甲走了 20 千米。</strong></p><p>两人的速度和为 9 千米/小时，相遇时间＝36÷9＝4 小时；甲行路程＝5×4＝20 千米。</p>'
      },
      {
        type: "代数推理",
        problem: '已知 <span class="formula">x ＋ 1/x ＝ 3</span>不求 x，直接求：<span class="formula">x<sup class="exponent">3</sup> ＋ 1/x<sup class="exponent">3</sup></span>',
        answer: '<p><strong>答案：18。</strong></p><p>利用恒等式：(x＋1/x)<sup>3</sup>＝x<sup>3</sup>＋1/x<sup>3</sup>＋3(x＋1/x)。代入 3<sup>3</sup>＝所求＋3×3，故所求＝27－9＝18。</p>'
      },
      {
        type: "数学老师的讲题题",
        problem: '求证：顺次连接任意四边形各边的中点，所得四边形是平行四边形。<br><strong>请尝试用两种方法说明；如果给学生讲，你会怎么讲？</strong>',
        answer: '<p><strong>方法一：中位线定理。</strong>连接原四边形的一条对角线。所得两个三角形中，各有一条中位线；这两条中位线都平行于该对角线，因此互相平行且相等。另一组对边同理，所以中点四边形是平行四边形。</p><p><strong>方法二：向量。</strong>设四个顶点的位置向量依次为 a、b、c、d，各边中点依次为 E、F、G、H。则 EF＝(c－a)/2，HG＝(c－a)/2；同理 FG＝EH，所以两组对边分别平行且相等。</p>'
      }
    ]
  }
];
