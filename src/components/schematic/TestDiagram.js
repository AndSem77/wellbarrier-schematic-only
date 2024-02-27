import { useContext, useRef } from 'react';
import { BarrierContext } from '../../context/BarrierContext';

export default function TestDiagram() {
  const { currentData, setCurrentData, setBarrierColor } =
    useContext(BarrierContext);
  return (
    <svg
      width='360'
      height='982'
      viewBox='0 0 360 982'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='diagram'>
        <g id='xmas-tree'>
          <g id='tree-cap'>
            <rect
              id='Rectangle 1'
              x='175.636'
              y='1'
              width='54.2943'
              height='17.1847'
              rx='3'
              fill='white'
              stroke='black'
            />
            <path id='Vector 1' d='M181.454 1V18' stroke='black' />
            <path id='Vector 2' d='M191.795 1V18' stroke='black' />
            <path id='Vector 3' d='M202.784 1V18' stroke='black' />
            <path id='Vector 4' d='M213.772 1V18' stroke='black' />
            <path id='Vector 5' d='M224.76 1V18' stroke='black' />
          </g>
          <g id='cv'>
            <ellipse
              id='Ellipse 1'
              cx='18'
              cy='17.8985'
              rx='18'
              ry='17.8985'
              transform='matrix(0.712538 -0.701634 0.712538 0.701634 177 40.2588)'
              fill='none'
              stroke={setBarrierColor('crown valve')}
            />
            <path
              id='Vector 6'
              d='M190.031 27.832L215.477 52.8882'
              stroke={setBarrierColor('crown valve')}
            />
            <path
              id='Vector 7'
              d='M189.959 53.0196L215.403 27.9645'
              stroke={setBarrierColor('crown valve')}
            />
          </g>
          <g id='ssv'>
            <ellipse
              id='Ellipse 1_2'
              cx='18'
              cy='17.9533'
              rx='18'
              ry='17.9533'
              transform='matrix(0.712538 -0.701634 0.712538 0.701634 177 121.259)'
              stroke='black'
            />
            <path
              id='Vector 6_2'
              d='M190.032 108.833L215.153 134.207'
              stroke='black'
            />
            <path
              id='Vector 7_2'
              d='M189.999 134.059L215.443 109.003'
              stroke='black'
            />
          </g>
          <g id='lmv'>
            <ellipse
              id='Ellipse 1_3'
              cx='18'
              cy='18'
              rx='18'
              ry='18'
              transform='matrix(0.712538 -0.701634 0.712538 0.701634 177 170.259)'
              fill='white'
              stroke='black'
            />
            <path
              id='Vector 6_3'
              d='M190.032 157.833L215.226 182.641'
              stroke='black'
            />
            <path
              id='Vector 7_3'
              d='M190.032 183.092L215.477 158.037'
              stroke='black'
            />
          </g>
          <g id='wv'>
            <circle
              id='Ellipse 1_4'
              cx='18'
              cy='18'
              r='18'
              transform='matrix(-0.712538 -0.701634 -0.712538 0.701634 191.303 78.2588)'
              fill='white'
              stroke='#FF0000'
            />
            <path
              id='Vector 6_4'
              d='M178.27 65.833L153.077 90.6408'
              stroke='#FF0000'
            />
            <path
              id='Vector 7_4'
              d='M178.27 91.0919L152.826 66.0367'
              stroke='#FF0000'
            />
          </g>
          <g id='kwv'>
            <circle
              id='Ellipse 1_5'
              cx='18'
              cy='18'
              r='18'
              transform='matrix(-0.712538 -0.701634 -0.712538 0.701634 191.303 78.2588)'
              fill='white'
              stroke='black'
            />
            <path
              id='Vector 6_5'
              d='M178.27 65.833L153.077 90.6408'
              stroke='black'
            />
            <path
              id='Vector 7_5'
              d='M178.27 91.0919L152.826 66.0367'
              stroke='black'
            />
          </g>
          <g id='kwv_2'>
            <circle
              id='Ellipse 1_6'
              cx='18'
              cy='18'
              r='18'
              transform='matrix(-0.712538 -0.701634 -0.712538 0.701634 264.303 78.2588)'
              fill='white'
              stroke='black'
            />
            <path
              id='Vector 6_6'
              d='M251.27 65.833L226.077 90.6408'
              stroke='black'
            />
            <path
              id='Vector 7_6'
              d='M251.27 91.0919L225.826 66.0367'
              stroke='black'
            />
          </g>
          <g id='wv-arrows'>
            <path
              id='Arrow 1'
              d='M116 79.2808L121 82.1676L121 76.3941L116 79.2808ZM138 78.7808L120.5 78.7808L120.5 79.7808L138 79.7808L138 78.7808Z'
              fill='black'
            />
            <path
              id='Arrow 3'
              d='M116 90.9153L121 93.802L121 88.0285L116 90.9153ZM138 90.4153L120.5 90.4153L120.5 91.4153L138 91.4153L138 90.4153Z'
              fill='black'
            />
            <path
              id='Arrow 2'
              d='M116 67L121 69.8868L121 64.1133L116 67ZM138 66.5L120.5 66.5L120.5 67.5L138 67.5L138 66.5Z'
              fill='black'
            />
          </g>
          <g id='tree-body'>
            <g id='tree-body_2'>
              <path
                id='Vector 9'
                d='M184 59.8153V23.8153H161.545L148 36.934V59.8153H184Z'
                stroke='black'
              />
              <path
                id='Vector 29'
                d='M221 60V24H243.455L257 37.1186V60H221Z'
                stroke='black'
              />
              <path id='Vector 10' d='M184.039 24.0465V18' stroke='black' />
              <path id='Vector 30' d='M221 24.0465V18' stroke='black' />
              <g id='kwv-flange'>
                <rect
                  id='Rectangle 3'
                  x='257'
                  y='53'
                  width='9.69541'
                  height='50.9176'
                  stroke='black'
                />
                <rect
                  id='Rectangle 5'
                  x='266.695'
                  y='58.7283'
                  width='2.58544'
                  height='3.81882'
                  stroke='black'
                />
                <rect
                  id='Rectangle 6'
                  x='266.695'
                  y='95.007'
                  width='2.58544'
                  height='3.81882'
                  stroke='black'
                />
                <rect
                  id='Rectangle 7'
                  x='266.695'
                  y='67.6389'
                  width='2.58544'
                  height='3.81882'
                  stroke='black'
                />
                <rect
                  id='Rectangle 8'
                  x='266.695'
                  y='77.1859'
                  width='2.58544'
                  height='3.81882'
                  stroke='black'
                />
                <rect
                  id='Rectangle 9'
                  x='266.695'
                  y='85.46'
                  width='2.58544'
                  height='3.81882'
                  stroke='black'
                />
              </g>
              <path id='Vector 70' d='M148.5 97.5H116' stroke='black' />
              <path id='Vector 71' d='M148.5 60H116' stroke='black' />
            </g>
            <path
              id='Vector 68'
              d='M319.5 195.5V191.5L257 164V97H221V146'
              stroke='black'
            />
            <path
              id='Vector 69'
              d='M86 196V191.98L148.183 164.34V97H184V146.249'
              stroke='black'
            />
          </g>
        </g>
        <g id='tubing-hanger'>
          <g id='tubing-header-left'>
            <ellipse
              id='Ellipse 1_7'
              cx='9'
              cy='8.94926'
              rx='9'
              ry='8.94926'
              transform='matrix(0.712538 -0.701634 0.712538 0.701634 47 195.629)'
              fill='white'
              stroke='black'
            />
            <path
              id='Vector 6_7'
              d='M53.5156 189.416L66.2384 201.944'
              stroke='black'
            />
            <path
              id='Vector 7_7'
              d='M53.4794 202.01L66.2017 189.482'
              stroke='black'
            />
          </g>
          <g id='tubing-header-right'>
            <ellipse
              id='Ellipse 1_8'
              cx='9'
              cy='8.94926'
              rx='9'
              ry='8.94926'
              transform='matrix(0.712538 -0.701634 0.712538 0.701634 334 195.629)'
              fill='white'
              stroke='black'
            />
            <path
              id='Vector 6_8'
              d='M340.516 189.416L353.238 201.944'
              stroke='black'
            />
            <path
              id='Vector 7_8'
              d='M340.479 202.01L353.202 189.482'
              stroke='black'
            />
          </g>
          <path id='Vector 41' d='M221 196H338' stroke='black' />
          <path id='Vector 42' d='M69 196H184' stroke='black' />
        </g>
        <g id='downhole-safety-valve'>
          <ellipse
            id='Ellipse 1_9'
            cx='18'
            cy='18'
            rx='18'
            ry='18'
            transform='matrix(0.712538 -0.701634 0.712538 0.701634 177 385.259)'
            stroke={setBarrierColor('downhole safety valve')}
          />
          <path
            id='Vector 6_9'
            d='M190.032 372.833L215.226 397.641'
            stroke={setBarrierColor('downhole safety valve')}
          />
          <path
            id='Vector 7_9'
            d='M190.032 398.092L215.477 373.037'
            stroke={setBarrierColor('downhole safety valve')}
          />
        </g>
        <path
          id='production-tubing-lower'
          d='M184 363H221V829H184V363Z'
          stroke='black'
        />
        <path
          id='production-tubing-upper'
          d='M184 146H221V356H184V146Z'
          stroke='black'
        />
        <rect
          id='downhole-safety-valve-landing-nipple'
          x='184'
          y='356'
          width='37'
          height='7'
          fill='black'
        />
        <g id='production-packer'>
          <g id='Group 21'>
            <rect
              id='Rectangle 27'
              x='165'
              y='759'
              width='19.4805'
              height='20'
              stroke={setBarrierColor('production packer')}
            />
            <path
              id='Line 139'
              d='M165.344 759.646L183.94 778.738'
              stroke={setBarrierColor('production packer')}
            />
            <line
              id='Line 140'
              y1='-0.5'
              x2='26.6517'
              y2='-0.5'
              transform='matrix(-0.697742 0.716349 0.697742 0.716349 184.481 760)'
              stroke={setBarrierColor('production packer')}
            />
          </g>
          <g id='Group 22'>
            <rect
              id='Rectangle 27_2'
              x='220.519'
              y='759'
              width='19.4805'
              height='20'
              stroke={setBarrierColor('production packer')}
            />
            <path
              id='Line 139_2'
              d='M220.864 759.646L239.46 778.738'
              stroke={setBarrierColor('production packer')}
            />
            <line
              id='Line 140_2'
              y1='-0.5'
              x2='26.6517'
              y2='-0.5'
              transform='matrix(-0.697742 0.716349 0.697742 0.716349 240 760)'
              stroke={setBarrierColor('production packer')}
            />
          </g>
        </g>
        <g id='perforations'>
          <g id='perforations-left'>
            <path
              id='Polygon 26'
              d='M129 872L165 868.536L165 875.464L129 872Z'
              fill='black'
            />
            <path
              id='Polygon 27'
              d='M129 883L165 879.536L165 886.464L129 883Z'
              fill='black'
            />
            <path
              id='Polygon 28'
              d='M129 894L165 890.536L165 897.464L129 894Z'
              fill='black'
            />
          </g>
          <g id='perforations-right'>
            <path
              id='Polygon 26_2'
              d='M276 872L240 868.536L240 875.464L276 872Z'
              fill='black'
            />
            <path
              id='Polygon 27_2'
              d='M276 883L240 879.536L240 886.464L276 883Z'
              fill='black'
            />
            <path
              id='Polygon 28_2'
              d='M276 894L240 890.536L240 897.464L276 894Z'
              fill='black'
            />
          </g>
        </g>
        <g id='gas-lift-mandrels'>
          <path
            id='glm-5'
            d='M227 466.913L227 481.391L227 495.087L221 499L221 463L227 466.913Z'
            fill='black'
          />
          <path
            id='glm-4'
            d='M227 518.913L227 533.391L227 547.087L221 551L221 515L227 518.913Z'
            fill='black'
          />
          <path
            id='glm-3'
            d='M227 570.913L227 585.391L227 599.087L221 603L221 567L227 570.913Z'
            fill='black'
          />
          <path
            id='glm-2'
            d='M227 622.913L227 637.391L227 651.087L221 655L221 619L227 622.913Z'
            fill='black'
          />
          <path
            id='glm-1'
            d='M227 674.913L227 689.391L227 703.087L221 707L221 671L227 674.913Z'
            fill='black'
          />
        </g>
        <g id='downhole-safety-valve-control-line'>
          <path
            id='Vector 64'
            d='M322 172H233.242V386H221'
            stroke={setBarrierColor('downhole safety valve control line')}
          />
          <circle
            id='Ellipse 12'
            cx='320'
            cy='172'
            r='3'
            fill={setBarrierColor('downhole safety valve control line')}
          />
        </g>
        <g id='production-casing-left'>
          <path
            id='production-casing-lower'
            d='M165 759L165 981'
            stroke='black'
          />
          <path
            id='production-casing-shoe'
            d='M165 976L165 982H153L165 976Z'
            fill='black'
          />
          <g id='production-casing-cement'>
            <line
              id='Line 126'
              x1='144.847'
              y1='672.445'
              x2='164.646'
              y2='652.646'
              stroke='black'
            />
            <line
              id='Line 127'
              x1='142.646'
              y1='696.646'
              x2='164.646'
              y2='674.646'
              stroke='black'
            />
            <line
              id='Line 128'
              x1='142.646'
              y1='718.646'
              x2='164.646'
              y2='696.646'
              stroke='black'
            />
            <line
              id='Line 129'
              x1='140.646'
              y1='742.646'
              x2='164.646'
              y2='718.646'
              stroke='black'
            />
            <line
              id='Line 130'
              x1='143.646'
              y1='761.646'
              x2='164.646'
              y2='740.646'
              stroke='black'
            />
            <line
              id='Line 131'
              x1='144.847'
              y1='782.445'
              x2='164.646'
              y2='762.646'
              stroke='black'
            />
            <line
              id='Line 132'
              x1='145.646'
              y1='803.646'
              x2='164.646'
              y2='784.646'
              stroke='black'
            />
            <line
              id='Line 133'
              x1='146.646'
              y1='824.646'
              x2='164.646'
              y2='806.646'
              stroke='black'
            />
            <line
              id='Line 134'
              x1='145.646'
              y1='847.646'
              x2='164.646'
              y2='828.646'
              stroke='black'
            />
            <path
              id='Line 135'
              d='M149.647 865.647L164.647 850.647'
              stroke='black'
            />
            <path
              id='Line 136'
              d='M145.646 893L155.146 883.5L164.647 874'
              stroke='black'
            />
            <path id='Line 137' d='M149.646 912L164.647 897' stroke='black' />
            <path
              id='Line 138'
              d='M151.293 935.353L164.646 922'
              stroke='black'
            />
            <path id='Line 139_3' d='M153.646 955L164.647 944' stroke='black' />
            <path id='Line 140_3' d='M155.646 974L164.647 965' stroke='black' />
          </g>
          <path
            id='production-casing-cement-curve'
            d='M136.5 692L142 696.5V703.5L139.5 711L142 715V722.5V734L139.5 742L145 749.5L142 757L145 765.5L142 772.5L145 780L142 787.5L145 794.5V804.5L149.5 813L145 822L149.5 830V839.5L145 846.5V854.5L149.5 862.5V875.5L145 892L149.5 901.5V913L153.5 919.5L149.5 932L153.5 943.5V949.5V955.5V963V971.5L157 977L161 980'
            stroke='black'
          />
          <g id='production-casing-valve-2'>
            <g id='production-casing-valve'>
              <ellipse
                id='Ellipse 1_10'
                cx='14'
                cy='13.9211'
                rx='14'
                ry='13.9211'
                transform='matrix(0.712538 -0.701634 0.712538 0.701634 0 223.646)'
                fill='white'
                stroke='black'
              />
              <path
                id='Vector 6_10'
                d='M10.1353 213.98L29.9264 233.469'
                stroke='black'
              />
              <path
                id='Vector 7_10'
                d='M10.0792 233.571L29.8693 214.084'
                stroke='black'
              />
            </g>
            <path id='Vector 51' d='M44 214H29' stroke='black' />
            <path id='Vector 52' d='M44 234H29' stroke='black' />
          </g>
          <g id='production-casing'>
            <g id='Group 35'>
              <path
                id='production-casing-upper'
                d='M164.5 758V258L103.285 234H62.5'
                stroke='black'
              />
              <path id='Vector 67' d='M86 214H62' stroke='black' />
            </g>
          </g>
          <g id='production-casing-valve-1'>
            <ellipse
              id='Ellipse 1_11'
              cx='14'
              cy='13.9211'
              rx='14'
              ry='13.9211'
              transform='matrix(0.712538 -0.701634 0.712538 0.701634 33 223.646)'
              fill='white'
              stroke='black'
            />
            <path
              id='Vector 6_11'
              d='M43.1353 213.98L62.9264 233.469'
              stroke='black'
            />
            <path
              id='Vector 7_11'
              d='M43.0792 233.571L62.8693 214.084'
              stroke='black'
            />
          </g>
          <g id='production-casing-seal'>
            <g id='Group 6'>
              <rect
                id='Rectangle 19'
                x='86.0625'
                y='196'
                width='17'
                height='18'
                stroke='black'
              />
              <path
                id='Line 95'
                d='M86.5625 213.676L103.063 196'
                stroke='black'
              />
              <path
                id='Line 96'
                d='M102.562 213.5L86.3535 196.584'
                stroke='black'
              />
            </g>
          </g>
        </g>
        <g id='production-casing-right'>
          <path
            id='production-casing-lower_2'
            d='M240 759L240 982'
            stroke='black'
          />
          <path
            id='production-casing-shoe_2'
            d='M240 976L240 982H252L240 976Z'
            fill='black'
          />
          <g id='production-casing-cement_2'>
            <line
              id='Line 126_2'
              y1='-0.5'
              x2='28'
              y2='-0.5'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 259.799 672.799)'
              stroke='black'
            />
            <line
              id='Line 127_2'
              y1='-0.5'
              x2='31.1127'
              y2='-0.5'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 262 697)'
              stroke='black'
            />
            <line
              id='Line 128_2'
              y1='-0.5'
              x2='31.1127'
              y2='-0.5'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 262 719)'
              stroke='black'
            />
            <line
              id='Line 129_2'
              y1='-0.5'
              x2='33.9411'
              y2='-0.5'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 264 743)'
              stroke='black'
            />
            <line
              id='Line 130_2'
              y1='-0.5'
              x2='29.6985'
              y2='-0.5'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 261 762)'
              stroke='black'
            />
            <line
              id='Line 131_2'
              y1='-0.5'
              x2='28'
              y2='-0.5'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 259.799 782.799)'
              stroke='black'
            />
            <line
              id='Line 132_2'
              y1='-0.5'
              x2='26.8701'
              y2='-0.5'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 259 804)'
              stroke='black'
            />
            <line
              id='Line 133_2'
              y1='-0.5'
              x2='25.4558'
              y2='-0.5'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 258 825)'
              stroke='black'
            />
            <line
              id='Line 134_2'
              y1='-0.5'
              x2='26.8701'
              y2='-0.5'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 259 848)'
              stroke='black'
            />
            <path
              id='Line 135_2'
              d='M255.354 865.647L240.354 850.647'
              stroke='black'
            />
            <path
              id='Line 136_2'
              d='M259.354 893L249.854 883.5L240.354 874'
              stroke='black'
            />
            <path id='Line 137_2' d='M255.354 912L240.354 897' stroke='black' />
            <path
              id='Line 138_2'
              d='M253.707 935.353L240.354 922'
              stroke='black'
            />
            <path id='Line 139_4' d='M251.354 955L240.354 944' stroke='black' />
            <path id='Line 140_4' d='M249.354 974L240.354 965' stroke='black' />
          </g>
          <path
            id='production-casing-cement-curve_2'
            d='M268.5 692L263 696.5V703.5L265.5 711L263 715V722.5V734L265.5 742L260 749.5L263 757L260 765.5L263 772.5L260 780L263 787.5L260 794.5V804.5L255.5 813L260 822L255.5 830V839.5L260 846.5V854.5L255.5 862.5V875.5L260 892L255.5 901.5V913L251.5 919.5L255.5 932L251.5 943.5V949.5V955.5V963V971.5L248 977L244 980'
            stroke='black'
          />
          <g id='production-casing_2'>
            <g id='Group 35_2'>
              <path
                id='production-casing-upper_2'
                d='M303.5 234L241 257.951V758.5'
                stroke='black'
              />
            </g>
          </g>
          <g id='production-casing-seal_2'>
            <g id='Group 6_2'>
              <rect
                id='Rectangle 19_2'
                width='17'
                height='18'
                transform='matrix(-1 0 0 1 318.938 196)'
                stroke='black'
              />
              <path
                id='Line 95_2'
                d='M318.438 213.676L301.938 196'
                stroke='black'
              />
              <path
                id='Line 96_2'
                d='M302.438 213.5L318.647 196.584'
                stroke='black'
              />
            </g>
          </g>
          <line
            id='Line 141'
            x1='165'
            y1='981.5'
            x2='241'
            y2='981.5'
            stroke='black'
          />
        </g>
        <g id='intermediate-casing-left'>
          <g id='intermediate-casing-cement'>
            <line
              id='Line 127_3'
              x1='125.646'
              y1='537.445'
              x2='145.445'
              y2='517.646'
              stroke='black'
            />
            <line
              id='Line 128_3'
              x1='125.646'
              y1='559.445'
              x2='145.445'
              y2='539.646'
              stroke='black'
            />
            <line
              id='Line 129_3'
              x1='125.646'
              y1='581.445'
              x2='145.445'
              y2='561.646'
              stroke='black'
            />
            <line
              id='Line 130_3'
              x1='125.646'
              y1='603.445'
              x2='145.445'
              y2='583.646'
              stroke='black'
            />
            <line
              id='Line 131_3'
              x1='125.646'
              y1='625.445'
              x2='145.445'
              y2='605.646'
              stroke='black'
            />
            <line
              id='Line 132_3'
              x1='127.445'
              y1='645.646'
              x2='145.445'
              y2='627.646'
              stroke='black'
            />
            <line
              id='Line 133_3'
              x1='131.445'
              y1='663.646'
              x2='145.445'
              y2='649.646'
              stroke='black'
            />
            <line
              id='Line 134_3'
              x1='134.66'
              y1='681.633'
              x2='145.459'
              y2='671.633'
              stroke='black'
            />
          </g>
          <g id='intermediate-casing-valve-1'>
            <g id='Group 34'>
              <g id='production-casing-valve-1_2'>
                <ellipse
                  id='Ellipse 1_12'
                  cx='14'
                  cy='13.9211'
                  rx='14'
                  ry='13.9211'
                  transform='matrix(0.712538 -0.701634 0.712538 0.701634 33 261.646)'
                  stroke='black'
                />
                <path
                  id='Vector 6_12'
                  d='M43.1353 251.98L62.9264 271.469'
                  stroke='black'
                />
                <path
                  id='Vector 7_12'
                  d='M43.0792 271.571L62.8693 252.084'
                  stroke='black'
                />
              </g>
            </g>
          </g>
          <g id='intermediate-casing-valve-2'>
            <g id='production-casing-valve_2'>
              <ellipse
                id='Ellipse 1_13'
                cx='14'
                cy='13.9211'
                rx='14'
                ry='13.9211'
                transform='matrix(0.712538 -0.701634 0.712538 0.701634 0 261.646)'
                stroke='black'
              />
              <path
                id='Vector 6_13'
                d='M10.1353 251.98L29.9264 271.469'
                stroke='black'
              />
              <path
                id='Vector 7_13'
                d='M10.0792 271.571L29.8693 252.084'
                stroke='black'
              />
            </g>
            <path id='Vector 53' d='M44 252H29' stroke='black' />
            <path id='Vector 54' d='M44 272H29' stroke='black' />
          </g>
          <g id='intermediate-casing-seal'>
            <g id='Group 7'>
              <rect
                id='Rectangle 19_3'
                x='86.0625'
                y='234'
                width='17'
                height='18'
                stroke='black'
              />
              <path
                id='Line 95_3'
                d='M86.5625 251.676L103.063 234'
                stroke='black'
              />
              <path
                id='Line 96_3'
                d='M102.562 251.5L86.3535 234.584'
                stroke='black'
              />
            </g>
          </g>
          <g id='intermediate-casing'>
            <path id='Vector 53_2' d='M86 252L63 252' stroke='black' />
            <g id='intermediate-casing_2'>
              <g id='Group 15'>
                <path
                  id='Vector 53_3'
                  d='M145.5 691V289L102.89 272H62'
                  stroke='black'
                />
              </g>
            </g>
          </g>
          <path
            id='intermediate-casing-shoe'
            d='M145 685L145 691H133L145 685Z'
            fill='black'
          />
          <path
            id='intermediate-casing-cement-curve'
            d='M138.5 694L135 691L131.5 678.5L128 671.5L131.5 664L128 653V643L123.5 638L125.5 627.5L122.5 617L128.5 610L122.5 599L125.5 592L124.5 584.5V581.5L119 577.5'
            stroke='black'
          />
        </g>
        <g id='intermediate-casing-right'>
          <g id='intermediate-casing-cement_2'>
            <line
              id='Line 127_4'
              y1='-0.5'
              x2='28'
              y2='-0.5'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 279.799 537.799)'
              stroke='black'
            />
            <line
              id='Line 128_4'
              y1='-0.5'
              x2='28'
              y2='-0.5'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 279.799 559.799)'
              stroke='black'
            />
            <line
              id='Line 129_4'
              y1='-0.5'
              x2='28'
              y2='-0.5'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 279.799 581.799)'
              stroke='black'
            />
            <line
              id='Line 130_4'
              y1='-0.5'
              x2='28'
              y2='-0.5'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 279.799 603.799)'
              stroke='black'
            />
            <line
              id='Line 131_4'
              y1='-0.5'
              x2='28'
              y2='-0.5'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 279.799 625.799)'
              stroke='black'
            />
            <line
              id='Line 132_4'
              y1='-0.5'
              x2='25.4558'
              y2='-0.5'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 278 646)'
              stroke='black'
            />
            <line
              id='Line 133_4'
              y1='-0.5'
              x2='19.799'
              y2='-0.5'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 274 664)'
              stroke='black'
            />
            <line
              id='Line 134_4'
              y1='-0.5'
              x2='14.718'
              y2='-0.5'
              transform='matrix(-0.73373 -0.679441 -0.679441 0.73373 270.799 682)'
              stroke='black'
            />
          </g>
          <g id='intermediate-casing-seal_2'>
            <g id='Group 7_2'>
              <rect
                id='Rectangle 19_4'
                width='17'
                height='18'
                transform='matrix(-1 0 0 1 319.737 234)'
                stroke='black'
              />
              <path
                id='Line 95_4'
                d='M319.237 251.676L302.737 234'
                stroke='black'
              />
              <path
                id='Line 96_4'
                d='M303.237 251.5L319.445 234.584'
                stroke='black'
              />
            </g>
          </g>
          <g id='intermediate-casing_3'>
            <g id='intermediate-casing_4'>
              <g id='Group 15_2'>
                <path
                  id='Vector 53_4'
                  d='M302.909 272L260.299 289V691'
                  stroke='black'
                />
              </g>
            </g>
          </g>
          <path
            id='intermediate-casing-shoe_2'
            d='M260.799 685L260.799 691H272.799L260.799 685Z'
            fill='black'
          />
          <path
            id='intermediate-casing-cement-curve_2'
            d='M267.299 694L270.799 691L274.299 678.5L277.799 671.5L274.299 664L277.799 653V643L282.299 638L280.299 627.5L283.299 617L277.299 610L283.299 599L280.299 592L281.299 584.5V581.5L286.799 577.5'
            stroke='black'
          />
        </g>
        <g id='surface-casing-left'>
          <g id='surface-casing'>
            <path id='Vector 57' d='M86 290H63' stroke='black' />
            <path id='line' d='M125.5 571L125.5 310L63 310' stroke='black' />
          </g>
          <path
            id='surface-casing-shoe'
            d='M125 565L125 571H113L125 565Z'
            fill='black'
          />
          <g id='surface-casing-cement'>
            <line
              id='Line 125'
              x1='105.646'
              y1='338.445'
              x2='125.445'
              y2='318.646'
              stroke='black'
            />
            <line
              id='Line 126_3'
              x1='105.646'
              y1='360.445'
              x2='125.445'
              y2='340.646'
              stroke='black'
            />
            <line
              id='Line 127_5'
              x1='105.646'
              y1='382.445'
              x2='125.445'
              y2='362.646'
              stroke='black'
            />
            <line
              id='Line 128_5'
              x1='105.646'
              y1='404.445'
              x2='125.445'
              y2='384.646'
              stroke='black'
            />
            <line
              id='Line 129_5'
              x1='105.646'
              y1='426.445'
              x2='125.445'
              y2='406.646'
              stroke='black'
            />
            <line
              id='Line 130_5'
              x1='105.646'
              y1='448.445'
              x2='125.445'
              y2='428.646'
              stroke='black'
            />
            <line
              id='Line 131_5'
              x1='105.646'
              y1='470.445'
              x2='125.445'
              y2='450.646'
              stroke='black'
            />
            <line
              id='Line 132_5'
              x1='107.445'
              y1='490.646'
              x2='125.445'
              y2='472.646'
              stroke='black'
            />
            <line
              id='Line 133_5'
              x1='111.445'
              y1='508.646'
              x2='125.445'
              y2='494.646'
              stroke='black'
            />
            <line
              id='Line 134_5'
              x1='111.445'
              y1='530.646'
              x2='125.445'
              y2='516.646'
              stroke='black'
            />
            <path
              id='Line 135_3'
              d='M112.092 552L125.445 538.647'
              stroke='black'
            />
          </g>
          <path
            id='surface-casing-cement-curve'
            d='M106 485L107.5 490L109.5 496L109.5 500L111 505L111 509L111 514L109.5 519L111 524L111 529.5L110 535.5L111.5 539.5L110 542.5L111.5 549L112.5 552L111.5 555L112.5 559.5L111.5 563L113 567.5L113 571L116 574L119.5 577.5'
            stroke='black'
          />
          <g id='surface-casing-seal'>
            <g id='Group 6_3'>
              <rect
                id='Rectangle 19_5'
                x='86.0625'
                y='272'
                width='17'
                height='18'
                stroke='black'
              />
              <path
                id='Line 95_5'
                d='M86.5625 289.676L103.063 272'
                stroke='black'
              />
              <path
                id='Line 96_5'
                d='M102.562 289.5L86.3535 272.584'
                stroke='black'
              />
            </g>
          </g>
          <g id='surface-casing-valve-1'>
            <ellipse
              id='Ellipse 1_14'
              cx='14'
              cy='13.9211'
              rx='14'
              ry='13.9211'
              transform='matrix(0.712538 -0.701634 0.712538 0.701634 33 299.646)'
              stroke='black'
            />
            <path
              id='Vector 6_14'
              d='M43.1353 289.98L62.9264 309.469'
              stroke='black'
            />
            <path
              id='Vector 7_14'
              d='M43.0791 309.571L62.8693 290.084'
              stroke='black'
            />
          </g>
          <g id='surface-casing-valve-2'>
            <ellipse
              id='Ellipse 1_15'
              cx='14'
              cy='13.9211'
              rx='14'
              ry='13.9211'
              transform='matrix(0.712538 -0.701634 0.712538 0.701634 0 299.646)'
              stroke='black'
            />
            <path
              id='Vector 6_15'
              d='M10.1353 289.98L29.9264 309.469'
              stroke='black'
            />
            <path
              id='Vector 7_15'
              d='M10.0792 309.571L29.8693 290.084'
              stroke='black'
            />
            <path id='Vector 55' d='M44 290H29' stroke='black' />
            <path id='Vector 56' d='M44 310H29' stroke='black' />
          </g>
        </g>
        <g id='surface-casing-right'>
          <g id='surface-casing_2'>
            <path
              id='line_2'
              d='M280.299 571L280.299 310L319 310'
              stroke='black'
            />
          </g>
          <path
            id='surface-casing-shoe_2'
            d='M280.799 565L280.799 571H292.799L280.799 565Z'
            fill='black'
          />
          <g id='surface-casing-cement_2'>
            <line
              id='Line 125_2'
              y1='-0.5'
              x2='28'
              y2='-0.5'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 299.799 338.799)'
              stroke='black'
            />
            <line
              id='Line 126_4'
              y1='-0.5'
              x2='28'
              y2='-0.5'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 299.799 360.799)'
              stroke='black'
            />
            <line
              id='Line 127_6'
              y1='-0.5'
              x2='28'
              y2='-0.5'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 299.799 382.799)'
              stroke='black'
            />
            <line
              id='Line 128_6'
              y1='-0.5'
              x2='28'
              y2='-0.5'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 299.799 404.799)'
              stroke='black'
            />
            <line
              id='Line 129_6'
              y1='-0.5'
              x2='28'
              y2='-0.5'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 299.799 426.799)'
              stroke='black'
            />
            <line
              id='Line 130_6'
              y1='-0.5'
              x2='28'
              y2='-0.5'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 299.799 448.799)'
              stroke='black'
            />
            <line
              id='Line 131_6'
              y1='-0.5'
              x2='28'
              y2='-0.5'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 299.799 470.799)'
              stroke='black'
            />
            <line
              id='Line 132_6'
              y1='-0.5'
              x2='25.4558'
              y2='-0.5'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 298 491)'
              stroke='black'
            />
            <line
              id='Line 133_6'
              y1='-0.5'
              x2='19.799'
              y2='-0.5'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 294 509)'
              stroke='black'
            />
            <line
              id='Line 134_6'
              y1='-0.5'
              x2='19.799'
              y2='-0.5'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 294 531)'
              stroke='black'
            />
            <path
              id='Line 135_4'
              d='M293.707 552L280.354 538.647'
              stroke='black'
            />
          </g>
          <path
            id='surface-casing-cement-curve_2'
            d='M299.799 485L298.299 490L296.299 496L296.299 500L294.799 505L294.799 509L294.799 514L296.299 519L294.799 524L294.799 529.5L295.799 535.5L294.299 539.5L295.799 542.5L294.299 549L293.299 552L294.299 555L293.299 559.5L294.299 563L292.799 567.5L292.799 571L289.799 574L286.299 577.5'
            stroke='black'
          />
          <g id='surface-casing-seal_2'>
            <g id='Group 6_4'>
              <rect
                id='Rectangle 19_6'
                width='17'
                height='18'
                transform='matrix(-1 0 0 1 319.737 272)'
                stroke='black'
              />
              <path
                id='Line 95_6'
                d='M319.237 289.676L302.737 272'
                stroke='black'
              />
              <path
                id='Line 96_6'
                d='M303.237 289.5L319.445 272.584'
                stroke='black'
              />
            </g>
          </g>
        </g>
        <g id='conductor-casing-left'>
          <g id='conductor-casing-seal'>
            <g id='Group 24'>
              <rect
                id='Rectangle 24'
                x='79'
                y='310'
                width='8'
                height='20'
                fill='#959595'
                stroke='black'
              />
            </g>
          </g>
          <path id='conductor-casing' d='M87 330H105V485.5' stroke='black' />
          <path
            id='conductor-casing-shoe'
            d='M105 480L105 486H93L105 480Z'
            fill='black'
          />
        </g>
        <g id='conductor-casing-right'>
          <g id='conductor-casing-seal_2'>
            <g id='Group 24_2'>
              <rect
                id='Rectangle 24_2'
                width='8'
                height='20'
                transform='matrix(-1 0 0 1 328 310)'
                fill='#959595'
                stroke='black'
              />
            </g>
            <g id='Group 25'>
              <rect
                id='Rectangle 24_3'
                width='8'
                height='20'
                transform='matrix(-1 0 0 1 328 290)'
                fill='#959595'
                stroke='black'
              />
            </g>
            <g id='Group 26'>
              <rect
                id='Rectangle 24_4'
                width='8'
                height='20'
                transform='matrix(-1 0 0 1 328 252)'
                fill='#959595'
                stroke='black'
              />
            </g>
            <g id='Group 27'>
              <rect
                id='Rectangle 24_5'
                width='8'
                height='20'
                transform='matrix(-1 0 0 1 328 214)'
                fill='#959595'
                stroke='black'
              />
            </g>
          </g>
          <path id='conductor-casing_2' d='M320 330H301V485' stroke='black' />
          <path
            id='conductor-casing-shoe_2'
            d='M301 480L301 486H313L301 480Z'
            fill='black'
          />
        </g>
        <g id='downhole-fluid'>
          <circle id='Ellipse 13' cx='189' cy='908' r='2' fill='black' />
          <circle id='Ellipse 21' cx='208' cy='908' r='2' fill='black' />
          <circle id='Ellipse 14' cx='180' cy='900' r='2' fill='black' />
          <circle id='Ellipse 15' cx='189' cy='893' r='2' fill='black' />
          <circle id='Ellipse 16' cx='208' cy='887' r='2' fill='black' />
          <circle id='Ellipse 23' cx='208' cy='873' r='2' fill='black' />
          <circle id='Ellipse 17' cx='214' cy='897' r='2' fill='black' />
          <circle id='Ellipse 22' cx='224' cy='904' r='2' fill='black' />
          <circle id='Ellipse 18' cx='221' cy='882' r='2' fill='black' />
          <circle id='Ellipse 19' cx='177' cy='880' r='2' fill='black' />
          <circle id='Ellipse 20' cx='192' cy='876' r='2' fill='black' />
        </g>
      </g>
    </svg>
  );
}
