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
        answer: '<p><strong>答案：(x－4)(x－1)(x＋1)。</strong></p><p><strong>第一步，把四项分成两组：</strong><br>x<sup>3</sup>－4x<sup>2</sup>－x＋4<br>＝(x<sup>3</sup>－4x<sup>2</sup>)＋(－x＋4)</p><p><strong>第二步，每组都提出相同的因式：</strong><br>＝x<sup>2</sup>(x－4)－(x－4)<br>这里“－x＋4”正好等于“－(x－4)”。</p><p><strong>第三步，再提出共同的 (x－4)：</strong><br>＝(x－4)(x<sup>2</sup>－1)<br>＝(x－4)(x－1)(x＋1)。</p>'
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
        problem: '甲、乙两地相距 36 千米。甲从甲地出发，每小时走 5 千米；乙同时从乙地出发，每小时走 4 千米。两人迎面而行。<br><strong>几小时后相遇？相遇时甲走了多少千米？</strong>',
        answer: '<p><strong>答案：4 小时后相遇；甲走了 20 千米。</strong></p><p><strong>先求每小时两人一共走近多少：</strong><br>5＋4＝9（千米）。<br>也就是说，每过 1 小时，两人之间的距离就减少 9 千米。</p><p><strong>再求相遇时间：</strong><br>36÷9＝4（小时）。</p><p><strong>最后求甲走的路程：</strong><br>5×4＝20（千米）。</p>'
      },
      {
        type: "列式推理",
        problem: '一个两位数，十位数字与个位数字的和是 11。把十位和个位交换后，得到的新数比原数大 27。<br><strong>原来的两位数是多少？</strong>',
        answer: '<p><strong>答案：47。</strong></p><p>设十位数字为 a，个位数字为 b。</p><p>由数字和得：a＋b＝11。<br>原数是 10a＋b，新数是 10b＋a。</p><p>新数比原数大 27：<br>(10b＋a)－(10a＋b)＝27<br>9b－9a＝27，所以 b－a＝3。</p><p>联立 a＋b＝11、b－a＝3，得 a＝4，b＝7。因此原数是 <strong>47</strong>。检验：74－47＝27。</p>'
      },
      {
        type: "数学老师的讲题题",
        problem: '求证：顺次连接任意四边形各边的中点，所得四边形是平行四边形。<br><strong>请尝试用两种方法说明；如果给学生讲，你会怎么讲？</strong>',
        answer: '<p><strong>方法一：中位线定理。</strong>连接原四边形的一条对角线。所得两个三角形中，各有一条中位线；这两条中位线都平行于该对角线，因此互相平行且相等。另一组对边同理，所以中点四边形是平行四边形。</p><p><strong>方法二：向量。</strong>设四个顶点的位置向量依次为 a、b、c、d，各边中点依次为 E、F、G、H。则 EF＝(c－a)/2，HG＝(c－a)/2；同理 FG＝EH，所以两组对边分别平行且相等。</p>'
      }
    ]
  }
];
