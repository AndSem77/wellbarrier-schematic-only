import { useContext, useState } from 'react';
import { BarrierContext } from '../../context/BarrierContext';

export default function DiagramSVG() {
  const { setColor, multipleElements } = useContext(BarrierContext);
  const { packerQty, glmQty, ssdQty } = multipleElements;

  return (
    <svg
      width='281'
      height='761'
      viewBox='0 0 281 761'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='diagram'>
        <g id='xmas-tree'>
          <g id='tree-cap'>
            <rect
              id='Rectangle 1'
              x='119.047'
              y='1'
              width='42.2698'
              height='13.3133'
              rx='3'
              fill='white'
              stroke='black'
            />
            <path id='Vector 1' d='M123.576 1V14.1702' stroke='black' />
            <path id='Vector 2' d='M131.627 1V14.1702' stroke='black' />
            <path id='Vector 3' d='M140.182 1V14.1702' stroke='black' />
            <path id='Vector 4' d='M148.737 1V14.1702' stroke='black' />
            <path id='Vector 5' d='M157.291 1V14.1702' stroke='black' />
          </g>
          <g id='cv'>
            <ellipse
              id='Ellipse 1'
              cx='13.9798'
              cy='13.901'
              rx='13.9798'
              ry='13.901'
              transform='matrix(0.714257 -0.699883 0.714257 0.699883 120.109 31.4146)'
              stroke={setColor('crown valve')}
            />
            <path
              id='Vector 6'
              d='M130.254 21.7872L150.064 41.1988'
              stroke={setColor('crown valve')}
            />
            <path
              id='Vector 7'
              d='M130.198 41.3005L150.007 21.8899'
              stroke={setColor('crown valve')}
            />
          </g>
          <g id='ssv'>
            <ellipse
              id='Ellipse 1_2'
              cx='13.9798'
              cy='13.9436'
              rx='13.9798'
              ry='13.9436'
              transform='matrix(0.714257 -0.699883 0.714257 0.699883 120.109 94.1669)'
              stroke={setColor('surface safety valve')}
            />
            <path
              id='Vector 6_2'
              d='M130.254 84.54L149.812 104.198'
              stroke={setColor('surface safety valve')}
            />
            <path
              id='Vector 7_2'
              d='M130.229 104.083L150.038 84.6724'
              stroke={setColor('surface safety valve')}
            />
          </g>
          <g id='lmv'>
            <ellipse
              id='Ellipse 1_3'
              cx='13.9798'
              cy='13.9798'
              rx='13.9798'
              ry='13.9798'
              transform='matrix(0.714257 -0.699883 0.714257 0.699883 120.109 132.128)'
              fill='white'
              stroke={setColor('lower master valve')}
            />
            <path
              id='Vector 6_3'
              d='M130.255 122.502L149.869 141.721'
              stroke={setColor('lower master valve')}
            />
            <path
              id='Vector 7_3'
              d='M130.255 142.07L150.064 122.66'
              stroke={setColor('lower master valve')}
            />
          </g>
          <g id='wv'>
            <circle
              id='Ellipse 1_4'
              cx='13.9798'
              cy='13.9798'
              r='13.9798'
              transform='matrix(-0.714257 -0.699883 -0.714257 0.699883 131.244 60.8539)'
              stroke={setColor('wing valve')}
            />
            <path
              id='Vector 6_4'
              d='M121.097 51.2274L101.484 70.4464'
              stroke={setColor('wing valve')}
            />
            <path
              id='Vector 7_4'
              d='M121.097 70.7959L101.288 51.3852'
              stroke={setColor('wing valve')}
            />
          </g>
          <g id='kwv'>
            <circle
              id='Ellipse 1_5'
              cx='13.9798'
              cy='13.9798'
              r='13.9798'
              transform='matrix(-0.714257 -0.699883 -0.714257 0.699883 188.077 60.8539)'
              stroke={setColor('kill wing valve')}
            />
            <path
              id='Vector 6_5'
              d='M177.93 51.2274L158.316 70.4464'
              stroke={setColor('kill wing valve')}
            />
            <path
              id='Vector 7_5'
              d='M177.93 70.7959L158.121 51.3852'
              stroke={setColor('kill wing valve')}
            />
          </g>
          <g id='wv-arrows'>
            <path
              id='Arrow 1'
              d='M72.6182 61.6457L77.6182 64.5324L77.6182 58.7589L72.6182 61.6457ZM89.7459 61.1457L77.1182 61.1457L77.1182 62.1457L89.7459 62.1457L89.7459 61.1457Z'
              fill='black'
            />
            <path
              id='Arrow 3'
              d='M72.6182 70.6591L77.6182 73.5459L77.6182 67.7724L72.6182 70.6591ZM89.7459 70.1591L77.1182 70.1591L77.1182 71.1591L89.7459 71.1591L89.7459 70.1591Z'
              fill='black'
            />
            <path
              id='Arrow 2'
              d='M72.6182 52.1315L77.6182 55.0182L77.6182 49.2447L72.6182 52.1315ZM89.7459 51.6315L77.1182 51.6315L77.1182 52.6315L89.7459 52.6315L89.7459 51.6315Z'
              fill='black'
            />
          </g>
          <g id='tree-body'>
            <g id='tree-body_2'>
              <path
                id='Vector 9'
                d='M125.558 46.5653V18.6754H108.076L97.5312 28.8387V46.5653H125.558Z'
                stroke='black'
              />
              <path
                id='Vector 29'
                d='M154.364 46.7085V18.8185H171.846L182.391 28.9818V46.7085H154.364Z'
                stroke='black'
              />
              <path
                id='Vector 10'
                d='M125.589 18.8545V14.1702'
                stroke='black'
              />
              <path
                id='Vector 30'
                d='M154.364 18.8545V14.1702'
                stroke='black'
              />
              <g id='kwv-flange'>
                <rect
                  id='Rectangle 3'
                  x='182.391'
                  y='41.2854'
                  width='7.54818'
                  height='39.4468'
                  stroke='black'
                />
                <rect
                  id='Rectangle 5'
                  x='189.939'
                  y='45.7232'
                  width='2.01285'
                  height='2.95851'
                  stroke='black'
                />
                <rect
                  id='Rectangle 6'
                  x='189.939'
                  y='73.8291'
                  width='2.01285'
                  height='2.95851'
                  stroke='black'
                />
                <rect
                  id='Rectangle 7'
                  x='189.939'
                  y='52.6264'
                  width='2.01285'
                  height='2.95851'
                  stroke='black'
                />
                <rect
                  id='Rectangle 8'
                  x='189.939'
                  y='60.0226'
                  width='2.01285'
                  height='2.95851'
                  stroke='black'
                />
                <rect
                  id='Rectangle 9'
                  x='189.939'
                  y='66.4327'
                  width='2.01285'
                  height='2.95851'
                  stroke='black'
                />
              </g>
              <path
                id='Vector 70'
                d='M97.9205 75.7604H72.6182'
                stroke='black'
              />
              <path
                id='Vector 71'
                d='M97.9205 46.7084H72.6182'
                stroke='black'
              />
            </g>
            <path
              id='Vector 68'
              d='M231.049 151.683V148.584L182.391 127.279V75.373H154.364V113.334'
              stroke='black'
            />
            <path
              id='Vector 69'
              d='M49.2623 152.07V148.956L97.6735 127.543V75.373H125.558V113.527'
              stroke='black'
            />
          </g>
          <g id='safety-valve-control-line'>
            <ellipse
              id='Ellipse 13'
              cx='230.336'
              cy='95.3242'
              rx='2'
              ry='2'
              stroke={setColor('safety valve control line')}
              fill={setColor('safety valve control line')}
            />
            <path
              id='Vector 72'
              d='M154 95H230'
              stroke={setColor('safety valve control line')}
            />
          </g>
        </g>
        <g id='tubing-hanger'>
          <g id='tubing-header-left'>
            <ellipse
              id='Ellipse 1_6'
              cx='6.98991'
              cy='6.95051'
              rx='6.98991'
              ry='6.95051'
              transform='matrix(0.714257 -0.699883 0.714257 0.699883 18.8995 151.783)'
              stroke={setColor('tubing hanger')}
            />
            <path
              id='Vector 6_6'
              d='M23.9722 146.97L33.8773 156.675'
              stroke={setColor('tubing hanger')}
            />
            <path
              id='Vector 7_6'
              d='M23.944 156.726L33.8487 147.021'
              stroke={setColor('tubing hanger')}
            />
          </g>
          <g id='tubing-header-right'>
            <ellipse
              id='Ellipse 1_7'
              cx='6.98991'
              cy='6.95051'
              rx='6.98991'
              ry='6.95051'
              transform='matrix(0.714257 -0.699883 0.714257 0.699883 242.338 151.783)'
              stroke={setColor('tubing hanger')}
            />
            <path
              id='Vector 6_7'
              d='M247.411 146.97L257.316 156.675'
              stroke={setColor('tubing hanger')}
            />
            <path
              id='Vector 7_7'
              d='M247.383 156.726L257.287 147.021'
              stroke={setColor('tubing hanger')}
            />
          </g>
          <path
            id='Vector 41'
            d='M154.364 152.07H245.452'
            stroke={setColor('tubing hanger')}
          />
          <path
            id='Vector 42'
            d='M36.0272 152.07H125.558'
            stroke={setColor('tubing hanger')}
          />
        </g>
        <g id='production-tubing'>
          <path
            id='production-tubing-lower'
            d='M125.309 281H154.309V639.249L125.309 657V281Z'
            stroke={setColor('production tubing ( below DHSV )')}
          />
          <path
            id='production-tubing-upper'
            d='M125.558 113.334H154.364V276.025H125.558V113.334Z'
            stroke={setColor('production tubing ( above DHSV )')}
          />
        </g>
        <g id='production-casing'>
          <g id='production-casing-cement-left'>
            <g id='production-casing-cement'>
              <line
                id='Line 127'
                y1='-0.5'
                x2='24.163'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 93.6386 540.205)'
                stroke={setColor('cement ( production casing )')}
              />
              <line
                id='Line 128'
                y1='-0.5'
                x2='24.163'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 93.6386 557.249)'
                stroke={setColor('cement ( production casing )')}
              />
              <line
                id='Line 129'
                y1='-0.5'
                x2='26.3596'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 92.0815 575.842)'
                stroke={setColor('cement ( production casing )')}
              />
              <line
                id='Line 130'
                y1='-0.5'
                x2='23.0647'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 94.4171 590.562)'
                stroke={setColor('cement ( production casing )')}
              />
              <line
                id='Line 131'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 95.3521 606.675)'
                stroke={setColor('cement ( production casing )')}
              />
              <line
                id='Line 132'
                y1='-0.5'
                x2='20.868'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 95.9742 623.1)'
                stroke={setColor('cement ( production casing )')}
              />
              <line
                id='Line 133'
                y1='-0.5'
                x2='19.7697'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 96.7527 639.369)'
                stroke={setColor('cement ( production casing )')}
              />
              <line
                id='Line 134'
                y1='-0.5'
                x2='20.868'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 95.9742 657.188)'
                stroke={setColor('cement ( production casing )')}
              />
              <path
                id='Line 135'
                d='M98.8131 670.859L110.491 659.238'
                stroke={setColor('cement ( production casing )')}
              />
              <path
                id='Line 136'
                d='M95.6989 692.05L103.095 684.69L110.491 677.33'
                stroke={setColor('cement ( production casing )')}
              />
              <path
                id='Line 137'
                d='M98.8131 706.77L110.491 695.149'
                stroke={setColor('cement ( production casing )')}
              />
              <path
                id='Line 138'
                d='M100.095 724.862L110.491 714.517'
                stroke={setColor('cement ( production casing )')}
              />
              <path
                id='Line 139'
                d='M101.927 740.083L110.491 731.561'
                stroke={setColor('cement ( production casing )')}
              />
              <path
                id='Line 140'
                d='M103.484 754.802L110.491 747.83'
                stroke={setColor('cement ( production casing )')}
              />
            </g>
            <path
              id='production-casing-cement-curve'
              d='M88.5781 536.331L92.8601 539.818V545.241L90.9137 551.051L92.8601 554.15V559.96V568.87L90.9137 575.067L95.1956 580.878L92.8601 586.688L95.1956 593.273L92.8601 598.696L95.1956 604.507L92.8601 610.317L95.1956 615.74V623.487L98.699 630.072L95.1956 637.045L98.699 643.243V650.602L95.1956 656.025V662.223L98.699 668.421V678.492L95.1956 691.275L98.699 698.635V707.544L101.813 712.58L98.699 722.264L101.813 731.173V735.822V740.47V746.28V752.865L104.538 757.126L107.652 759.451'
              stroke={setColor('cement ( production casing )')}
            />
          </g>
          <g id='production-casing-cement-right'>
            <g id='production-casing-cement_2'>
              <line
                id='Line 127_2'
                y1='-0.5'
                x2='24.163'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 186.284 540.205)'
                stroke={setColor('cement ( production casing )')}
              />
              <line
                id='Line 128_2'
                y1='-0.5'
                x2='24.163'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 186.284 557.249)'
                stroke={setColor('cement ( production casing )')}
              />
              <line
                id='Line 129_2'
                y1='-0.5'
                x2='26.3596'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 187.841 575.842)'
                stroke={setColor('cement ( production casing )')}
              />
              <line
                id='Line 130_2'
                y1='-0.5'
                x2='23.0647'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 185.506 590.562)'
                stroke={setColor('cement ( production casing )')}
              />
              <line
                id='Line 131_2'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 184.571 606.675)'
                stroke={setColor('cement ( production casing )')}
              />
              <line
                id='Line 132_2'
                y1='-0.5'
                x2='20.868'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 183.949 623.1)'
                stroke={setColor('cement ( production casing )')}
              />
              <line
                id='Line 133_2'
                y1='-0.5'
                x2='19.7697'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 183.17 639.369)'
                stroke={setColor('cement ( production casing )')}
              />
              <line
                id='Line 134_2'
                y1='-0.5'
                x2='20.868'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 183.949 657.188)'
                stroke={setColor('cement ( production casing )')}
              />
              <path
                id='Line 135_2'
                d='M181.11 670.859L169.432 659.238'
                stroke={setColor('cement ( production casing )')}
              />
              <path
                id='Line 136_2'
                d='M184.224 692.05L176.828 684.69L169.432 677.33'
                stroke={setColor('cement ( production casing )')}
              />
              <path
                id='Line 137_2'
                d='M181.11 706.77L169.432 695.149'
                stroke={setColor('cement ( production casing )')}
              />
              <path
                id='Line 138_2'
                d='M179.828 724.862L169.432 714.517'
                stroke={setColor('cement ( production casing )')}
              />
              <path
                id='Line 139_2'
                d='M177.996 740.083L169.432 731.561'
                stroke={setColor('cement ( production casing )')}
              />
              <path
                id='Line 140_2'
                d='M176.438 754.802L169.432 747.83'
                stroke={setColor('cement ( production casing )')}
              />
            </g>
            <path
              id='production-casing-cement-curve_2'
              d='M191.345 536.331L187.063 539.818V545.241L189.009 551.051L187.063 554.15V559.96V568.87L189.009 575.067L184.727 580.878L187.063 586.688L184.727 593.273L187.063 598.696L184.727 604.507L187.063 610.317L184.727 615.74V623.487L181.224 630.072L184.727 637.045L181.224 643.243V650.602L184.727 656.025V662.223L181.224 668.421V678.492L184.727 691.275L181.224 698.635V707.544L178.11 712.58L181.224 722.264L178.11 731.173V735.822V740.47V746.28V752.865L175.385 757.126L172.271 759.451'
              stroke={setColor('cement ( production casing )')}
            />
            <g id='Group 27'>
              <rect
                id='Rectangle 24'
                width='4'
                height='16'
                transform='matrix(-1 0 0 1 234.667 165.015)'
                fill='black'
              />
            </g>
          </g>
          <g id='production-casing-lower'>
            <path
              id='production-casing-lower-left'
              d='M109.965 580.5L109.965 760'
              stroke={setColor('production casing ( below packer )')}
            />
            <path
              id='production-casing-lower-right'
              d='M169 580L169 761'
              stroke={setColor('production casing ( below packer )')}
            />
            <g id='production-casing-shoe'>
              <path
                id='production-casing-shoe_2'
                d='M110.766 756.352L110.766 761H101.424L110.766 756.352Z'
                fill='black'
              />
              <path
                id='production-casing-shoe_3'
                d='M169.156 756.352L169.156 761H178.499L169.156 756.352Z'
                fill='black'
              />
              <line
                id='Line 141'
                x1='110.766'
                y1='760.5'
                x2='169.935'
                y2='760.5'
                stroke='black'
              />
            </g>
          </g>
          <g id='production-casing-upper'>
            <g id='production-casing-above-packer-right'>
              <g id='Group 35'>
                <path
                  id='production-casing-upper_2'
                  d='M218.593 181.51L169 200V581'
                  stroke={setColor('production casing ( above packer )')}
                />
              </g>
            </g>
            <g id='production-casing-above-packer-left'>
              <g id='Group 35_2'>
                <path
                  id='production-casing-upper_3'
                  d='M110 580.5L111.5 201.226L62.7192 181.51H30.9668'
                  stroke={setColor('production casing ( above packer )')}
                />
                <path
                  id='Vector 67'
                  d='M49.2623 166.015H30.5775'
                  stroke={setColor('production casing ( above packer )')}
                />
              </g>
            </g>
          </g>
          <g id='production-casing-valve-1'>
            <ellipse
              id='Ellipse 1_8'
              cx='10.8732'
              cy='10.8119'
              rx='10.8732'
              ry='10.8119'
              transform='matrix(0.714257 -0.699883 0.714257 0.699883 8.00008 173.488)'
              fill='white'
              stroke={setColor('production casing valves')}
            />
            <path
              id='Vector 6_8'
              d='M15.8908 166L31.2987 181.098'
              stroke={setColor('production casing valves')}
            />
            <path
              id='Vector 7_8'
              d='M15.847 181.177L31.2543 166.08'
              stroke={setColor('production casing valves')}
            />
          </g>
          <g id='production-casing-seal'>
            <g id='production-casing-seal-left'>
              <g id='Group 6'>
                <rect
                  id='Rectangle 19'
                  x='49.3109'
                  y='152.07'
                  width='13.235'
                  height='13.945'
                  stroke={setColor('production casing valves')}
                />
                <path
                  id='Line 95'
                  d='M49.7002 165.764L62.546 152.07'
                  stroke={setColor('production casing valves')}
                />
                <path
                  id='Line 96'
                  d='M62.1567 165.628L49.5375 152.523'
                  stroke={setColor('production casing valves')}
                />
              </g>
            </g>
            <g id='production-casing-seal-right'>
              <g id='Group 6_2'>
                <rect
                  id='Rectangle 19_2'
                  width='13.235'
                  height='13.945'
                  transform='matrix(-1 0 0 1 230.612 152.07)'
                  stroke={setColor('production casing valves')}
                />
                <path
                  id='Line 95_2'
                  d='M230.223 165.764L217.377 152.07'
                  stroke={setColor('production casing valves')}
                />
                <path
                  id='Line 96_2'
                  d='M217.766 165.628L230.385 152.523'
                  stroke={setColor('production casing valves')}
                />
              </g>
            </g>
          </g>
        </g>
        <g id='intermediate-casing'>
          <g id='intermediate-casing-left'>
            <g id='intermediate-casing-cement'>
              <line
                id='Line 127_3'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 80.4035 416.869)'
                stroke={setColor('cement ( intermediate casing )')}
              />
              <line
                id='Line 128_3'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 80.4035 433.913)'
                stroke={setColor('cement ( intermediate casing )')}
              />
              <line
                id='Line 129_3'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 80.4035 450.956)'
                stroke={setColor('cement ( intermediate casing )')}
              />
              <line
                id='Line 130_3'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 80.4035 468)'
                stroke={setColor('cement ( intermediate casing )')}
              />
              <line
                id='Line 131_3'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 80.4035 485.044)'
                stroke={setColor('cement ( intermediate casing )')}
              />
              <line
                id='Line 132_3'
                y1='-0.5'
                x2='19.7697'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 81.8041 500.694)'
                stroke={setColor('cement ( intermediate casing )')}
              />
              <line
                id='Line 133_3'
                y1='-0.5'
                x2='15.3765'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 84.9183 514.639)'
                stroke={setColor('cement ( intermediate casing )')}
              />
              <line
                id='Line 134_3'
                y1='-0.5'
                x2='11.4325'
                y2='-0.5'
                transform='matrix(0.73539 -0.677644 0.681235 0.732065 87.4103 528.584)'
                stroke={setColor('cement ( intermediate casing )')}
              />
            </g>
            <g id='intermediate-casing_2'>
              <path
                id='Vector 53'
                d='M49.2623 195.455L31.356 195.455'
                stroke={setColor('cement ( intermediate casing )')}
              />
              <g id='intermediate-casing_3'>
                <g id='Group 15'>
                  <path
                    id='Vector 53_2'
                    d='M95.5849 535.557V224.119L62.4114 210.949H30.5775'
                    stroke={setColor('intermediate casing')}
                  />
                </g>
              </g>
            </g>
            <path
              id='intermediate-casing-shoe'
              d='M95.1956 530.908L95.1956 535.557H85.8533L95.1956 530.908Z'
              fill='black'
            />
            <path
              id='intermediate-casing-cement-curve'
              d='M90.1352 537.881L87.4103 535.557L84.6855 525.873L81.9606 520.45L84.6855 514.639L81.9606 506.117V498.37L78.4572 494.496L80.0143 486.362L77.6787 478.227L82.3499 472.804L77.6787 464.282L80.0143 458.859L79.2358 453.049V450.725L74.9538 447.626'
              stroke={setColor('cement ( intermediate casing )')}
            />
          </g>
          <g id='intermediate-casing-right'>
            <g id='intermediate-casing-cement_2'>
              <line
                id='Line 127_4'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 200.141 416.869)'
                stroke={setColor('cement ( intermediate casing )')}
              />
              <line
                id='Line 128_4'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 200.141 433.913)'
                stroke={setColor('cement ( intermediate casing )')}
              />
              <line
                id='Line 129_4'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 200.141 450.956)'
                stroke={setColor('cement ( intermediate casing )')}
              />
              <line
                id='Line 130_4'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 200.141 468)'
                stroke={setColor('cement ( intermediate casing )')}
              />
              <line
                id='Line 131_4'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 200.141 485.044)'
                stroke={setColor('cement ( intermediate casing )')}
              />
              <line
                id='Line 132_4'
                y1='-0.5'
                x2='19.7697'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 198.74 500.694)'
                stroke={setColor('cement ( intermediate casing )')}
              />
              <line
                id='Line 133_4'
                y1='-0.5'
                x2='15.3765'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 195.626 514.639)'
                stroke={setColor('cement ( intermediate casing )')}
              />
              <line
                id='Line 134_4'
                y1='-0.5'
                x2='11.4325'
                y2='-0.5'
                transform='matrix(-0.73539 -0.677644 -0.681235 0.732065 193.134 528.584)'
                stroke={setColor('cement ( intermediate casing )')}
              />
            </g>
            <g id='intermediate-casing_4'>
              <g id='intermediate-casing_5'>
                <g id='Group 15_2'>
                  <path
                    id='Vector 53_3'
                    d='M218.133 210.949L184.96 224.119V535.557'
                    stroke={setColor('intermediate casing')}
                  />
                </g>
              </g>
            </g>
            <path
              id='intermediate-casing-shoe_2'
              d='M185.349 530.908L185.349 535.557H194.691L185.349 530.908Z'
              fill='black'
            />
            <path
              id='intermediate-casing-cement-curve_2'
              d='M190.409 537.881L193.134 535.557L195.859 525.873L198.584 520.45L195.859 514.639L198.584 506.117V498.37L202.087 494.496L200.53 486.362L202.866 478.227L198.195 472.804L202.866 464.282L200.53 458.859L201.309 453.049V450.725L205.591 447.626'
              stroke={setColor('cement ( intermediate casing )')}
            />
            <g id='Group 26'>
              <rect
                id='Rectangle 24_2'
                width='4'
                height='16'
                transform='matrix(-1 0 0 1 235.667 195.455)'
                fill='black'
              />
            </g>
          </g>
          <g id='intermediate-casing-valve-1'>
            <g id='Group 34'>
              <g id='production-casing-valve-1_2'>
                <ellipse
                  id='Ellipse 1_9'
                  cx='10.8732'
                  cy='10.8119'
                  rx='10.8732'
                  ry='10.8119'
                  transform='matrix(0.714257 -0.699883 0.714257 0.699883 8.00008 202.927)'
                  stroke={setColor('intermediate casing valves')}
                />
                <path
                  id='Vector 6_9'
                  d='M15.8908 195.439L31.2987 210.537'
                  stroke={setColor('intermediate casing valves')}
                />
                <path
                  id='Vector 7_9'
                  d='M15.847 210.617L31.2543 195.519'
                  stroke={setColor('intermediate casing valves')}
                />
              </g>
            </g>
          </g>
          <g id='intermediate-casing-seal'>
            <g id='intermediate-casing-seal-right'>
              <g id='Group 7'>
                <rect
                  id='Rectangle 19_3'
                  width='13.235'
                  height='13.945'
                  transform='matrix(-1 0 0 1 231.234 181.51)'
                  stroke={setColor('intermediate casing valves')}
                />
                <path
                  id='Line 95_3'
                  d='M230.844 195.203L217.999 181.51'
                  stroke={setColor('intermediate casing valves')}
                />
                <path
                  id='Line 96_3'
                  d='M218.388 195.067L231.007 181.962'
                  stroke={setColor('intermediate casing valves')}
                />
              </g>
            </g>
            <g id='intermediate-casing-seal-left'>
              <g id='Group 7_2'>
                <rect
                  id='Rectangle 19_4'
                  x='49.3109'
                  y='181.51'
                  width='13.235'
                  height='13.945'
                  stroke={setColor('intermediate casing valves')}
                />
                <path
                  id='Line 95_4'
                  d='M49.7002 195.203L62.546 181.51'
                  stroke={setColor('intermediate casing valves')}
                />
                <path
                  id='Line 96_4'
                  d='M62.1567 195.067L49.5375 181.962'
                  stroke={setColor('intermediate casing valves')}
                />
              </g>
            </g>
          </g>
        </g>
        <g id='surface-casing'>
          <g id='surface-casing-left'>
            <g id='surface-casing_2'>
              <path
                id='Vector 57'
                d='M49.2623 224.894H31.356'
                stroke={setColor('surface casing')}
              />
              <path
                id='line'
                d='M80.0143 442.59L80.0143 240.388H31.356'
                stroke={setColor('surface casing')}
              />
            </g>
            <path
              id='surface-casing-shoe'
              d='M79.625 437.942L79.625 442.59H70.2826L79.625 437.942Z'
              fill='black'
            />
            <g id='surface-casing-cement'>
              <line
                id='Line 125'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 64.8329 262.699)'
                stroke={setColor('cement ( surface casing )')}
              />
              <line
                id='Line 126'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 64.8329 279.743)'
                stroke={setColor('cement ( surface casing )')}
              />
              <line
                id='Line 127_5'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 64.8329 296.787)'
                stroke={setColor('cement ( surface casing )')}
              />
              <line
                id='Line 128_5'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 64.8329 313.831)'
                stroke={setColor('cement ( surface casing )')}
              />
              <line
                id='Line 129_5'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 64.8329 330.875)'
                stroke={setColor('cement ( surface casing )')}
              />
              <line
                id='Line 130_5'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 64.8329 347.919)'
                stroke={setColor('cement ( surface casing )')}
              />
              <line
                id='Line 131_5'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 64.8329 364.962)'
                stroke={setColor('cement ( surface casing )')}
              />
              <line
                id='Line 132_5'
                y1='-0.5'
                x2='19.7697'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 66.2335 380.613)'
                stroke={setColor('cement ( surface casing )')}
              />
              <line
                id='Line 133_5'
                y1='-0.5'
                x2='15.3765'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 69.3476 394.558)'
                stroke={setColor('cement ( surface casing )')}
              />
              <line
                id='Line 134_5'
                y1='-0.5'
                x2='15.3765'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 69.3476 411.601)'
                stroke={setColor('cement ( surface casing )')}
              />
              <path
                id='Line 135_3'
                d='M69.5757 427.87L79.9718 417.525'
                stroke={setColor('cement ( surface casing )')}
              />
            </g>
            <path
              id='surface-casing-cement-curve'
              d='M64.8329 375.964L66.0006 379.838L67.5577 384.486L67.5577 387.585L68.7255 391.459L68.7255 394.558L68.7255 398.431L67.5577 402.305L68.7255 406.178L68.7255 410.439L67.947 415.088L69.1147 418.186L67.947 420.511L69.1147 425.546L69.8933 427.87L69.1147 430.195L69.8933 433.681L69.1147 436.392L70.2825 439.879L70.2825 442.59L72.6181 444.914L75.343 447.626'
              stroke={setColor('cement ( surface casing )')}
            />
          </g>
          <g id='surface-casing-right'>
            <g id='surface-casing_3'>
              <path
                id='line_2'
                d='M200.53 442.59L200.53 240.388L231.5 240.388'
                stroke={setColor('surface casing')}
              />
            </g>
            <path
              id='surface-casing-shoe_2'
              d='M200.919 437.942L200.919 442.59H210.262L200.919 437.942Z'
              fill='black'
            />
            <g id='surface-casing-cement_2'>
              <line
                id='Line 125_2'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 215.712 262.7)'
                stroke={setColor('cement ( surface casing )')}
              />
              <line
                id='Line 126_2'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 215.712 279.743)'
                stroke={setColor('cement ( surface casing )')}
              />
              <line
                id='Line 127_6'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 215.712 296.787)'
                stroke={setColor('cement ( surface casing )')}
              />
              <line
                id='Line 128_6'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 215.712 313.831)'
                stroke={setColor('cement ( surface casing )')}
              />
              <line
                id='Line 129_6'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 215.712 330.875)'
                stroke={setColor('cement ( surface casing )')}
              />
              <line
                id='Line 130_6'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 215.712 347.919)'
                stroke={setColor('cement ( surface casing )')}
              />
              <line
                id='Line 131_6'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 215.712 364.963)'
                stroke={setColor('cement ( surface casing )')}
              />
              <line
                id='Line 132_6'
                y1='-0.5'
                x2='19.7697'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 214.311 380.613)'
                stroke={setColor('cement ( surface casing )')}
              />
              <line
                id='Line 133_6'
                y1='-0.5'
                x2='15.3765'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 211.197 394.558)'
                stroke={setColor('cement ( surface casing )')}
              />
              <line
                id='Line 134_6'
                y1='-0.5'
                x2='15.3765'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 211.197 411.601)'
                stroke={setColor('cement ( surface casing )')}
              />
              <path
                id='Line 135_4'
                d='M210.969 427.871L200.573 417.525'
                stroke={setColor('cement ( surface casing )')}
              />
            </g>
            <path
              id='surface-casing-cement-curve_2'
              d='M215.712 375.964L214.544 379.838L212.987 384.486L212.987 387.585L211.819 391.459L211.819 394.558L211.819 398.431L212.987 402.305L211.819 406.178L211.819 410.439L212.598 415.088L211.43 418.187L212.598 420.511L211.43 425.546L210.651 427.871L211.43 430.195L210.651 433.681L211.43 436.392L210.262 439.879L210.262 442.59L207.926 444.914L205.201 447.626'
              stroke={setColor('cement ( surface casing )')}
            />
            <g id='Group 25'>
              <rect
                id='Rectangle 24_3'
                width='4'
                height='16'
                transform='matrix(-1 0 0 1 235.667 224.894)'
                fill='black'
              />
            </g>
          </g>
          <g id='surface-casing-valve-1'>
            <ellipse
              id='Ellipse 1_10'
              cx='10.8732'
              cy='10.8119'
              rx='10.8732'
              ry='10.8119'
              transform='matrix(0.714257 -0.699883 0.714257 0.699883 8.00008 232.367)'
              stroke={setColor('surface casing valves')}
            />
            <path
              id='Vector 6_10'
              d='M15.8907 224.879L31.2987 239.977'
              stroke={setColor('surface casing valves')}
            />
            <path
              id='Vector 7_10'
              d='M15.847 240.056L31.2543 224.959'
              stroke={setColor('surface casing valves')}
            />
          </g>
          <g id='surface-casing-seal'>
            <g id='surface-casing-seal-right'>
              <g id='Group 6_3'>
                <rect
                  id='Rectangle 19_5'
                  x='49.3109'
                  y='210.949'
                  width='13.235'
                  height='13.945'
                  stroke={setColor('surface casing valves')}
                />
                <path
                  id='Line 95_5'
                  d='M49.7002 224.643L62.546 210.949'
                  stroke={setColor('surface casing valves')}
                />
                <path
                  id='Line 96_5'
                  d='M62.1567 224.507L49.5375 211.401'
                  stroke={setColor('surface casing valves')}
                />
              </g>
            </g>
            <g id='surface-casing-seal-left'>
              <g id='Group 6_4'>
                <rect
                  id='Rectangle 19_6'
                  width='13.235'
                  height='13.945'
                  transform='matrix(-1 0 0 1 231.234 210.949)'
                  stroke={setColor('surface casing valves')}
                />
                <path
                  id='Line 95_6'
                  d='M230.844 224.643L217.999 210.949'
                  stroke={setColor('surface casing valves')}
                />
                <path
                  id='Line 96_6'
                  d='M218.388 224.507L231.007 211.401'
                  stroke={setColor('surface casing valves')}
                />
              </g>
            </g>
          </g>
        </g>
        <g id='conductor-casing'>
          <g id='conductor-casing-left'>
            <g id='conductor-casing-seal'>
              <g id='Group 24'>
                <rect
                  id='Rectangle 24_4'
                  x='45.8125'
                  y='240.388'
                  width='4'
                  height='16'
                  fill='black'
                />
              </g>
            </g>
            <path
              id='conductor-casing_2'
              d='M50.0408 255.883H64.0544V376.352'
              stroke={setColor('conductor casing')}
            />
            <path
              id='conductor-casing-shoe'
              d='M64.0544 372.091L64.0544 376.739H54.712L64.0544 372.091Z'
              fill='black'
            />
          </g>
          <g id='conductor-casing-right'>
            <g id='conductor-casing-seal_2'>
              <g id='Group 24_2'>
                <rect
                  id='Rectangle 24_5'
                  width='4'
                  height='16'
                  transform='matrix(-1 0 0 1 235.667 240.388)'
                  fill='black'
                />
              </g>
            </g>
            <path
              id='conductor-casing_3'
              d='M231.439 255.883H216.647V375.964'
              stroke={setColor('conductor casing')}
            />
            <path
              id='conductor-casing-shoe_2'
              d='M216.647 372.091L216.647 376.739H225.989L216.647 372.091Z'
              fill='black'
            />
          </g>
        </g>
        <g id='downhole-safety-valve-control-line'>
          <path
            id='Vector 64'
            d='M231 139.5H162.309V299.267H154.364'
            stroke={setColor('downhole safety valve control line')}
          />
          <ellipse
            id='Ellipse 12'
            cx='230.644'
            cy='139.324'
            rx='2.33559'
            ry='2.32416'
            fill={setColor('downhole safety valve control line')}
          />
        </g>
        <g id='downhole-safety-valve'>
          <g id='valve'>
            <ellipse
              id='Ellipse 1_11'
              cx='13.9798'
              cy='13.9798'
              rx='13.9798'
              ry='13.9798'
              transform='matrix(0.714257 -0.699883 0.714257 0.699883 120.109 298.693)'
              stroke={setColor('downhole safety valve')}
            />
            <path
              id='Vector 6_11'
              d='M130.255 289.066L149.869 308.285'
              stroke={setColor('downhole safety valve')}
            />
            <path
              id='Vector 7_11'
              d='M130.255 308.635L150.064 289.224'
              stroke={setColor('downhole safety valve')}
            />
          </g>
          <rect
            id='downhole-safety-valve-landing-nipple'
            x='125.558'
            y='276.025'
            width='28.8057'
            height='5.42304'
            fill={setColor('downhole safety valve landing nipple')}
          />
        </g>
        <g id='sea-level'>
          <g id='waves 3' clipPath='url(#clip0_148_331)'>
            <g id='boat 1' clipPath='url(#clip1_148_331)'>
              <g id='Group'>
                <path
                  id='Vector'
                  d='M8.00002 281.695L10.2898 287.84H44.7682L45.8151 283.231C45.8151 283.231 17.6825 284.698 8.00002 281.695Z'
                  fill='black'
                />
                <path
                  id='Vector_2'
                  d='M15.8509 284.069L17.9443 280.857L39.2071 280.927L41.301 284.139L15.8509 284.069Z'
                  fill='black'
                />
                <path
                  id='Vector_3'
                  d='M34.0059 272.933C33.2537 272.933 33.1557 276.179 33.1557 276.179H34.8564C34.8564 276.179 34.7584 272.933 34.0059 272.933Z'
                  fill='black'
                />
                <path
                  id='Vector_4'
                  d='M25.5338 275.9L28.5757 270H29.0994L27.12 273.875L27.7906 276.598L25.5338 275.9Z'
                  fill='black'
                />
                <path
                  id='Vector_5'
                  d='M25.2719 278.832H35.4126L36.9173 280.997H24.029L25.2719 278.832ZM36.1322 275.9H25.5338L22.393 281.207L40.493 282.899L36.1322 275.9Z'
                  fill='black'
                />
                <path
                  id='Vector_6'
                  d='M27.1156 278.427H26.3124V281.667H27.1156V278.427Z'
                  fill='black'
                />
                <path
                  id='Vector_7'
                  d='M29.6038 278.427H28.8006V281.667H29.6038V278.427Z'
                  fill='black'
                />
                <path
                  id='Vector_8'
                  d='M32.0915 278.427H31.2884V281.667H32.0915V278.427Z'
                  fill='black'
                />
                <path
                  id='Vector_9'
                  d='M34.5793 278.427H33.7762V281.667H34.5793V278.427Z'
                  fill='black'
                />
              </g>
            </g>
            <path
              id='waves-right'
              d='M2 287.5L3.01813 288.878C4.08891 290.327 6.30473 290.166 7.15394 288.576L7.36452 288.182C8.13772 286.735 10.1713 286.627 11.094 287.984V287.984C11.9341 289.219 13.7391 289.264 14.6398 288.072L14.9759 287.627C15.927 286.369 17.8484 286.468 18.6645 287.818V287.818C19.4579 289.131 21.3086 289.269 22.2889 288.09L22.8176 287.454C23.878 286.178 25.8363 286.178 26.8967 287.454L27.4904 288.168C28.4142 289.28 30.1706 289.097 30.8463 287.82V287.82C31.541 286.506 33.3649 286.359 34.2606 287.545L34.5419 287.917C35.5 289.185 37.4202 289.137 38.314 287.823L38.418 287.67C39.2894 286.389 41.1781 286.389 42.0495 287.67L42.167 287.843C43.0119 289.085 44.8591 289.036 45.6364 287.75V287.75C46.4136 286.464 48.2609 286.415 49.1057 287.657L49.2728 287.903C50.1399 289.178 52.0028 289.224 52.9324 287.994L53.1259 287.738C54.1171 286.426 56.1196 286.53 56.9702 287.937V287.937C57.7554 289.236 59.5545 289.446 60.6182 288.363L61.1299 287.842C62.5075 286.44 64.8527 286.791 65.7589 288.536L66 289'
              stroke='black'
            />
          </g>
          <g id='fish' clipPath='url(#clip2_148_331)'>
            <g id='Group_2'>
              <path
                id='Vector_10'
                d='M46.7138 323.683C45.5008 321.733 41.641 319.41 38.1123 319.825C36.3479 318.373 35.4289 318 35.4289 318C35.4289 318 33.9218 319.659 34.1792 321.153C34.8407 321.526 35.9804 321.028 35.9804 321.028C35.9804 321.028 34.3996 322.065 33.3338 321.941C32.2677 321.816 29.8048 318.332 29.3637 319.576C29.3269 320.945 29.8416 322.438 29.5844 322.77C29.3269 323.102 28.0772 324.678 29.2536 325.01C30.4298 325.342 32.4882 323.724 33.3338 324.139C34.1792 324.554 34.4732 324.844 34.4732 324.844C34.4732 324.844 33.3706 324.596 32.966 324.554C32.5617 324.513 33.3338 329.324 37.1933 325.964C37.5976 326.006 38.1123 326.047 38.1123 326.047C38.1123 326.047 36.7522 326.877 37.1198 327.374C37.4873 327.872 38.2962 328.577 39.6562 326.296C42.5968 326.462 47.5109 324.964 46.7138 323.683Z'
                fill='black'
              />
            </g>
          </g>
          <g id='waves 4' clipPath='url(#clip3_148_331)'>
            <path
              id='waves-right_2'
              d='M216 287.5L217.018 288.878C218.089 290.327 220.305 290.166 221.154 288.576L221.365 288.182C222.138 286.735 224.171 286.627 225.094 287.984V287.984C225.934 289.219 227.739 289.264 228.64 288.072L228.976 287.627C229.927 286.369 231.848 286.468 232.665 287.818V287.818C233.458 289.131 235.309 289.269 236.289 288.09L236.818 287.454C237.878 286.178 239.836 286.178 240.897 287.454L241.49 288.168C242.414 289.28 244.171 289.097 244.846 287.82V287.82C245.541 286.506 247.365 286.359 248.261 287.545L248.542 287.917C249.5 289.185 251.42 289.137 252.314 287.823L252.418 287.67C253.289 286.389 255.178 286.389 256.05 287.67L256.167 287.843C257.012 289.085 258.859 289.036 259.636 287.75V287.75C260.414 286.464 262.261 286.415 263.106 287.657L263.273 287.903C264.14 289.178 266.003 289.224 266.932 287.994L267.126 287.738C268.117 286.426 270.12 286.53 270.97 287.937V287.937C271.755 289.236 273.555 289.446 274.618 288.363L275.13 287.842C276.507 286.44 278.853 286.791 279.759 288.536L280 289'
              stroke='black'
            />
          </g>
          <g id='sea-bottom'>
            <line id='Line 142' y1='332.5' x2='64' y2='332.5' stroke='black' />
            <line
              id='Line 143'
              x1='217'
              y1='332.5'
              x2='281'
              y2='332.5'
              stroke='black'
            />
          </g>
        </g>
        <g id='gas-lift-mandrels'>
          {glmQty > 0 && glmQty <= 5 ? (
            <path
              id='glm-1'
              d='M158.98 332.032L158.98 343.248L158.98 353.858L154.309 356.89L154.309 329L158.98 332.032Z'
              fill={setColor('gas lift mandrel')}
            />
          ) : null}
          {glmQty >= 2 && glmQty <= 5 ? (
            <path
              id='glm-2'
              d='M158.98 372.317L158.98 383.534L158.98 394.144L154.309 397.175L154.309 369.285L158.98 372.317Z'
              fill={setColor('gas lift mandrel')}
            />
          ) : null}
          {glmQty >= 3 && glmQty <= 5 ? (
            <path
              id='glm-3'
              d='M158.98 412.602L158.98 423.819L158.98 434.429L154.309 437.461L154.309 409.571L158.98 412.602Z'
              fill={setColor('gas lift mandrel')}
            />
          ) : null}
          {glmQty >= 4 && glmQty <= 5 ? (
            <path
              id='glm-4'
              d='M158.98 452.888L158.98 464.104L158.98 474.715L154.309 477.746L154.309 449.856L158.98 452.888Z'
              fill={setColor('gas lift mandrel')}
            />
          ) : null}
          {glmQty === 5 ? (
            <path
              id='glm-5'
              d='M158.98 493.173L158.98 504.39L158.98 515L154.309 518.032L154.309 490.142L158.98 493.173Z'
              fill={setColor('gas lift mandrel')}
            />
          ) : null}
        </g>
        <g id='sliding-side-doors'>
          {ssdQty > 0 && ssdQty <= 3 ? (
            <g id='sliding-side-door-1'>
              <rect
                id='Rectangle 36'
                x='123.473'
                y='344.5'
                width='34.027'
                height='18'
                stroke={setColor('sliding side door')}
              />
              <rect
                id='Rectangle 37'
                x='122'
                y='344'
                width='3.69231'
                height='19'
                fill={setColor('sliding side door')}
              />
              <rect
                id='Rectangle 38'
                x='154.108'
                y='344'
                width='3.89189'
                height='19'
                fill={setColor('sliding side door')}
              />
            </g>
          ) : null}

          {ssdQty >= 2 && ssdQty <= 3 ? (
            <g id='sliding-side-door-2'>
              <rect
                id='Rectangle 36_2'
                x='123.473'
                y='408.5'
                width='34.027'
                height='18'
                stroke={setColor('sliding side door')}
              />
              <rect
                id='Rectangle 37_2'
                x='122'
                y='408'
                width='3.69231'
                height='19'
                fill={setColor('sliding side door')}
              />
              <rect
                id='Rectangle 38_2'
                x='154.108'
                y='408'
                width='3.89189'
                height='19'
                fill={setColor('sliding side door')}
              />
            </g>
          ) : null}

          {ssdQty === 3 ? (
            <g id='sliding-side-door-3'>
              <rect
                id='Rectangle 36_3'
                x='123.473'
                y='472.5'
                width='34.027'
                height='18'
                stroke={setColor('sliding side door')}
              />
              <rect
                id='Rectangle 37_3'
                x='122'
                y='472'
                width='3.69231'
                height='19'
                fill={setColor('sliding side door')}
              />
              <rect
                id='Rectangle 38_3'
                x='154.108'
                y='472'
                width='3.89189'
                height='19'
                fill={setColor('sliding side door')}
              />
            </g>
          ) : null}
        </g>

        {packerQty === 1 || 2 ? (
          <g id='production-packer-1'>
            <g id='Group 22_3'>
              <rect
                id='Rectangle 27_3'
                x='154.224'
                y='564'
                width='15'
                height='15.4944'
                stroke={setColor('production packer')}
              />
              <path
                id='Line 139_5'
                d='M154.489 564.501L168.808 579.292'
                stroke={setColor('production packer')}
              />
              <line
                id='Line 140_5'
                y1='-0.5'
                x2='20.5864'
                y2='-0.5'
                transform='matrix(-0.695551 0.718476 0.695551 0.718476 169.224 564.775)'
                stroke={setColor('production packer')}
              />
            </g>
            <g id='Group 22_4'>
              <rect
                id='Rectangle 27_4'
                x='110'
                y='564'
                width='15'
                height='15.4944'
                stroke={setColor('production packer')}
              />
              <path
                id='Line 139_6'
                d='M110.265 564.501L124.584 579.292'
                stroke={setColor('production packer')}
              />
              <line
                id='Line 140_6'
                y1='-0.5'
                x2='20.5864'
                y2='-0.5'
                transform='matrix(-0.695551 0.718476 0.695551 0.718476 125 564.775)'
                stroke={setColor('production packer')}
              />
            </g>
          </g>
        ) : null}

        {packerQty === 2 ? (
          <g id='production-packer-2'>
            <g id='Group 22'>
              <rect
                id='Rectangle 27'
                x='154.224'
                y='603'
                width='15'
                height='15.4944'
                stroke={setColor('production packer')}
              />
              <path
                id='Line 139_3'
                d='M154.489 603.501L168.808 618.292'
                stroke={setColor('production packer')}
              />
              <line
                id='Line 140_3'
                y1='-0.5'
                x2='20.5864'
                y2='-0.5'
                transform='matrix(-0.695551 0.718476 0.695551 0.718476 169.224 603.775)'
                stroke={setColor('production packer')}
              />
            </g>
            <g id='Group 22_2'>
              <rect
                id='Rectangle 27_2'
                x='110'
                y='603'
                width='15'
                height='15.4944'
                stroke={setColor('production packer')}
              />
              <path
                id='Line 139_4'
                d='M110.265 603.501L124.584 618.292'
                stroke={setColor('production packer')}
              />
              <line
                id='Line 140_4'
                y1='-0.5'
                x2='20.5864'
                y2='-0.5'
                transform='matrix(-0.695551 0.718476 0.695551 0.718476 125 603.775)'
                stroke={setColor('production packer')}
              />
            </g>
          </g>
        ) : null}

        <g id='tubing-plug'>
          <path
            id='Rect'
            d='M127.9 524C127.9 522.343 129.243 521 130.9 521H148.9C150.557 521 151.9 522.343 151.9 524V558.565C151.9 559.984 150.906 561.209 149.517 561.501L140.612 563.371C140.208 563.456 139.792 563.457 139.388 563.374L130.293 561.494C128.9 561.207 127.9 559.979 127.9 558.556V524Z'
            fill={setColor('tubing plug')}
          />
          <rect
            id='Rectangle 40'
            x='125'
            y='530'
            width='29'
            height='8'
            fill={setColor('tubing plug')}
          />
          <rect
            id='Rectangle 41'
            x='125'
            y='543'
            width='29'
            height='8'
            fill={setColor('tubing plug')}
          />
          <rect
            id='Rectangle 42'
            x='136'
            y='514'
            width='8'
            height='7'
            fill={setColor('tubing plug')}
          />
        </g>
        <g id='perforations'>
          <g id='perforations-left'>
            <path
              id='Polygon 26'
              d='M81.7391 675.781L109.766 673.097L109.766 678.465L81.7391 675.781Z'
              fill='black'
            />
            <path
              id='Polygon 27'
              d='M81.7391 684.303L109.766 681.619L109.766 686.986L81.7391 684.303Z'
              fill='black'
            />
            <path
              id='Polygon 28'
              d='M81.7391 692.825L109.766 690.141L109.766 695.508L81.7391 692.825Z'
              fill='black'
            />
          </g>
          <g id='perforations-right'>
            <path
              id='Polygon 26_2'
              d='M197.183 675.781L169.156 673.097L169.156 678.465L197.183 675.781Z'
              fill='black'
            />
            <path
              id='Polygon 27_2'
              d='M197.183 684.303L169.156 681.619L169.156 686.986L197.183 684.303Z'
              fill='black'
            />
            <path
              id='Polygon 28_2'
              d='M197.183 692.825L169.156 690.141L169.156 695.508L197.183 692.825Z'
              fill='black'
            />
          </g>
        </g>
        <g id='downhole-fluid'>
          <ellipse
            id='Ellipse 13_2'
            cx='130.451'
            cy='701.671'
            rx='1.55706'
            ry='1.54944'
            fill='black'
          />
          <ellipse
            id='Ellipse 21'
            cx='145.243'
            cy='701.671'
            rx='1.55706'
            ry='1.54944'
            fill='black'
          />
          <ellipse
            id='Ellipse 14'
            cx='123.444'
            cy='695.473'
            rx='1.55706'
            ry='1.54944'
            fill='black'
          />
          <ellipse
            id='Ellipse 15'
            cx='130.451'
            cy='690.05'
            rx='1.55706'
            ry='1.54944'
            fill='black'
          />
          <ellipse
            id='Ellipse 16'
            cx='145.243'
            cy='685.402'
            rx='1.55706'
            ry='1.54944'
            fill='black'
          />
          <ellipse
            id='Ellipse 23'
            cx='145.243'
            cy='674.556'
            rx='1.55706'
            ry='1.54944'
            fill='black'
          />
          <ellipse
            id='Ellipse 17'
            cx='149.914'
            cy='693.149'
            rx='1.55706'
            ry='1.54944'
            fill='black'
          />
          <ellipse
            id='Ellipse 22'
            cx='157.7'
            cy='698.572'
            rx='1.55706'
            ry='1.54944'
            fill='black'
          />
          <ellipse
            id='Ellipse 18'
            cx='155.364'
            cy='681.528'
            rx='1.55706'
            ry='1.54944'
            fill='black'
          />
          <ellipse
            id='Ellipse 19'
            cx='121.109'
            cy='679.979'
            rx='1.55706'
            ry='1.54944'
            fill='black'
          />
          <ellipse
            id='Ellipse 20'
            cx='132.787'
            cy='676.88'
            rx='1.55706'
            ry='1.54944'
            fill='black'
          />
        </g>
      </g>
      <defs>
        <clipPath id='clip0_148_331'>
          <rect
            width='64'
            height='48'
            fill='white'
            transform='translate(0 263)'
          />
        </clipPath>
        <clipPath id='clip1_148_331'>
          <rect
            width='38.15'
            height='18'
            fill='white'
            transform='translate(8.00002 270)'
          />
        </clipPath>
        <clipPath id='clip2_148_331'>
          <rect
            width='18.1667'
            height='10'
            fill='white'
            transform='matrix(-1 0 0 1 46.8 318)'
          />
        </clipPath>
        <clipPath id='clip3_148_331'>
          <rect
            width='64'
            height='48'
            fill='white'
            transform='translate(216 263)'
          />
        </clipPath>
      </defs>
    </svg>
  );
}
