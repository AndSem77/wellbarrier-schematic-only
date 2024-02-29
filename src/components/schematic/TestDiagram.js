import { useContext, useRef } from 'react';
import { BarrierContext } from '../../context/BarrierContext';

export default function TestDiagram() {
  const { currentData, setCurrentData, setBarrierColor } =
    useContext(BarrierContext);
  return (
    <div className='mt-4'>
      <svg
        width='280'
        height='760'
        viewBox='0 0 280 760'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='diagram'>
          <g id='xmas-tree'>
            <g id='tree-cap'>
              <rect
                id='Rectangle 1'
                x='136.739'
                width='42.2698'
                height='13.3133'
                rx='3'
                fill='white'
                stroke='black'
              />
              <path id='Vector 1' d='M141.268 0V13.1702' stroke='black' />
              <path id='Vector 2' d='M149.319 0V13.1702' stroke='black' />
              <path id='Vector 3' d='M157.874 0V13.1702' stroke='black' />
              <path id='Vector 4' d='M166.428 0V13.1702' stroke='black' />
              <path id='Vector 5' d='M174.983 0V13.1702' stroke='black' />
            </g>
            <g id='cv'>
              <ellipse
                id='Ellipse 1'
                cx='13.9798'
                cy='13.901'
                rx='13.9798'
                ry='13.901'
                transform='matrix(0.714257 -0.699883 0.714257 0.699883 137.8 30.4146)'
                fill='white'
                stroke='black'
              />
              <path
                id='Vector 6'
                d='M147.945 20.7872L167.756 40.1988'
                stroke='black'
              />
              <path
                id='Vector 7'
                d='M147.889 40.3006L167.698 20.8899'
                stroke='black'
              />
            </g>
            <g id='ssv'>
              <ellipse
                id='Ellipse 1_2'
                cx='13.9798'
                cy='13.9436'
                rx='13.9798'
                ry='13.9436'
                transform='matrix(0.714257 -0.699883 0.714257 0.699883 137.8 93.1669)'
                stroke='black'
              />
              <path
                id='Vector 6_2'
                d='M147.946 83.54L167.504 103.198'
                stroke='black'
              />
              <path
                id='Vector 7_2'
                d='M147.92 103.083L167.729 83.6725'
                stroke='black'
              />
            </g>
            <g id='lmv'>
              <ellipse
                id='Ellipse 1_3'
                cx='13.9798'
                cy='13.9798'
                rx='13.9798'
                ry='13.9798'
                transform='matrix(0.714257 -0.699883 0.714257 0.699883 137.8 131.128)'
                fill='white'
                stroke='black'
              />
              <path
                id='Vector 6_3'
                d='M147.946 121.502L167.56 140.721'
                stroke='black'
              />
              <path
                id='Vector 7_3'
                d='M147.946 141.07L167.756 121.66'
                stroke='black'
              />
            </g>
            <g id='wv'>
              <circle
                id='Ellipse 1_4'
                cx='13.9798'
                cy='13.9798'
                r='13.9798'
                transform='matrix(-0.714257 -0.699883 -0.714257 0.699883 148.935 59.8539)'
                fill='white'
                stroke='#FF0000'
              />
              <path
                id='Vector 6_4'
                d='M138.789 50.2274L119.175 69.4465'
                stroke='#FF0000'
              />
              <path
                id='Vector 7_4'
                d='M138.789 69.796L118.98 50.3853'
                stroke='#FF0000'
              />
            </g>
            <g id='kwv'>
              <circle
                id='Ellipse 1_5'
                cx='13.9798'
                cy='13.9798'
                r='13.9798'
                transform='matrix(-0.714257 -0.699883 -0.714257 0.699883 148.935 59.8539)'
                fill='white'
                stroke='black'
              />
              <path
                id='Vector 6_5'
                d='M138.789 50.2274L119.175 69.4465'
                stroke='black'
              />
              <path
                id='Vector 7_5'
                d='M138.789 69.796L118.98 50.3853'
                stroke='black'
              />
            </g>
            <g id='kwv_2'>
              <circle
                id='Ellipse 1_6'
                cx='13.9798'
                cy='13.9798'
                r='13.9798'
                transform='matrix(-0.714257 -0.699883 -0.714257 0.699883 205.768 59.8539)'
                fill='white'
                stroke='black'
              />
              <path
                id='Vector 6_6'
                d='M195.622 50.2274L176.008 69.4465'
                stroke='black'
              />
              <path
                id='Vector 7_6'
                d='M195.622 69.796L175.812 50.3853'
                stroke='black'
              />
            </g>
            <g id='wv-arrows'>
              <path
                id='Arrow 1'
                d='M90.3097 60.6457L95.3097 63.5324L95.3097 57.7589L90.3097 60.6457ZM107.437 60.1457L94.8097 60.1457L94.8097 61.1457L107.437 61.1457L107.437 60.1457Z'
                fill='black'
              />
              <path
                id='Arrow 3'
                d='M90.3097 69.6592L95.3097 72.5459L95.3097 66.7724L90.3097 69.6592ZM107.437 69.1592L94.8097 69.1592L94.8097 70.1592L107.437 70.1592L107.437 69.1592Z'
                fill='black'
              />
              <path
                id='Arrow 2'
                d='M90.3097 51.1315L95.3097 54.0182L95.3097 48.2447L90.3097 51.1315ZM107.437 50.6315L94.8097 50.6315L94.8097 51.6315L107.437 51.6315L107.437 50.6315Z'
                fill='black'
              />
            </g>
            <g id='tree-body'>
              <g id='tree-body_2'>
                <path
                  id='Vector 9'
                  d='M143.25 45.5653V17.6754H125.768L115.223 27.8387V45.5653H143.25Z'
                  stroke='black'
                />
                <path
                  id='Vector 29'
                  d='M172.056 45.7085V17.8185H189.538L200.083 27.9818V45.7085H172.056Z'
                  stroke='black'
                />
                <path
                  id='Vector 10'
                  d='M143.28 17.8545V13.1702'
                  stroke='black'
                />
                <path
                  id='Vector 30'
                  d='M172.056 17.8545V13.1702'
                  stroke='black'
                />
                <g id='kwv-flange'>
                  <rect
                    id='Rectangle 3'
                    x='200.083'
                    y='40.2854'
                    width='7.54818'
                    height='39.4468'
                    stroke='black'
                  />
                  <rect
                    id='Rectangle 5'
                    x='207.631'
                    y='44.7232'
                    width='2.01285'
                    height='2.95851'
                    stroke='black'
                  />
                  <rect
                    id='Rectangle 6'
                    x='207.631'
                    y='72.8291'
                    width='2.01285'
                    height='2.95851'
                    stroke='black'
                  />
                  <rect
                    id='Rectangle 7'
                    x='207.631'
                    y='51.6264'
                    width='2.01285'
                    height='2.95851'
                    stroke='black'
                  />
                  <rect
                    id='Rectangle 8'
                    x='207.631'
                    y='59.0227'
                    width='2.01285'
                    height='2.95851'
                    stroke='black'
                  />
                  <rect
                    id='Rectangle 9'
                    x='207.631'
                    y='65.4328'
                    width='2.01285'
                    height='2.95851'
                    stroke='black'
                  />
                </g>
                <path
                  id='Vector 70'
                  d='M115.612 74.7604H90.3097'
                  stroke='black'
                />
                <path
                  id='Vector 71'
                  d='M115.612 45.7084H90.3097'
                  stroke='black'
                />
              </g>
              <path
                id='Vector 68'
                d='M248.741 150.683V147.584L200.083 126.279V74.373H172.056V112.334'
                stroke='black'
              />
              <path
                id='Vector 69'
                d='M66.9537 151.07V147.956L115.365 126.543V74.373H143.25V112.527'
                stroke='black'
              />
            </g>
          </g>
          <g id='tubing-hanger'>
            <g id='tubing-header-left'>
              <ellipse
                id='Ellipse 1_7'
                cx='6.98991'
                cy='6.95051'
                rx='6.98991'
                ry='6.95051'
                transform='matrix(0.714257 -0.699883 0.714257 0.699883 36.591 150.783)'
                fill='white'
                stroke='black'
              />
              <path
                id='Vector 6_7'
                d='M41.6636 145.97L51.5687 155.675'
                stroke='black'
              />
              <path
                id='Vector 7_7'
                d='M41.6355 155.726L51.5401 146.021'
                stroke='black'
              />
            </g>
            <g id='tubing-header-right'>
              <ellipse
                id='Ellipse 1_8'
                cx='6.98991'
                cy='6.95051'
                rx='6.98991'
                ry='6.95051'
                transform='matrix(0.714257 -0.699883 0.714257 0.699883 260.03 150.783)'
                fill='white'
                stroke='black'
              />
              <path
                id='Vector 6_8'
                d='M265.102 145.97L275.007 155.675'
                stroke='black'
              />
              <path
                id='Vector 7_8'
                d='M265.074 155.726L274.979 146.021'
                stroke='black'
              />
            </g>
            <path id='Vector 41' d='M172.056 151.07H263.144' stroke='black' />
            <path id='Vector 42' d='M53.7187 151.07H143.25' stroke='black' />
          </g>
          <g id='downhole-safety-valve'>
            <ellipse
              id='Ellipse 1_9'
              cx='13.9798'
              cy='13.9798'
              rx='13.9798'
              ry='13.9798'
              transform='matrix(0.714257 -0.699883 0.714257 0.699883 137.8 297.693)'
              stroke='black'
            />
            <path
              id='Vector 6_9'
              d='M147.946 288.066L167.56 307.285'
              stroke='black'
            />
            <path
              id='Vector 7_9'
              d='M147.946 307.635L167.756 288.224'
              stroke='black'
            />
          </g>
          <path
            id='production-tubing-lower'
            d='M143.25 280.448H172.056V624.424L143.25 641.468V280.448Z'
            stroke='black'
          />
          <path
            id='production-tubing-upper'
            d='M143.25 112.334H172.056V275.025H143.25V112.334Z'
            stroke='black'
          />
          <rect
            id='downhole-safety-valve-landing-nipple'
            x='143.25'
            y='275.025'
            width='28.8057'
            height='5.42304'
            fill='black'
          />
          <g id='production-packer'>
            <g id='Group 21'>
              <rect
                id='Rectangle 27'
                x='128.458'
                y='587.238'
                width='15.1662'
                height='15.4944'
                stroke='black'
              />
              <path
                id='Line 139'
                d='M128.726 587.738L143.203 602.529'
                stroke='black'
              />
              <line
                id='Line 140'
                y1='-0.5'
                x2='20.6971'
                y2='-0.5'
                transform='matrix(-0.699498 0.714635 0.699498 0.714635 143.624 588.012)'
                stroke='black'
              />
            </g>
            <g id='Group 22'>
              <rect
                id='Rectangle 27_2'
                x='171.681'
                y='587.238'
                width='15.1662'
                height='15.4944'
                stroke='black'
              />
              <path
                id='Line 139_2'
                d='M171.95 587.738L186.427 602.529'
                stroke='black'
              />
              <line
                id='Line 140_2'
                y1='-0.5'
                x2='20.6971'
                y2='-0.5'
                transform='matrix(-0.699498 0.714635 0.699498 0.714635 186.848 588.012)'
                stroke='black'
              />
            </g>
          </g>
          <g id='perforations'>
            <g id='perforations-left'>
              <path
                id='Polygon 26'
                d='M100.431 674.781L128.458 672.097L128.458 677.465L100.431 674.781Z'
                fill='black'
              />
              <path
                id='Polygon 27'
                d='M100.431 683.303L128.458 680.619L128.458 685.986L100.431 683.303Z'
                fill='black'
              />
              <path
                id='Polygon 28'
                d='M100.431 691.825L128.458 689.141L128.458 694.508L100.431 691.825Z'
                fill='black'
              />
            </g>
            <g id='perforations-right'>
              <path
                id='Polygon 26_2'
                d='M214.875 674.781L186.848 672.097L186.848 677.465L214.875 674.781Z'
                fill='black'
              />
              <path
                id='Polygon 27_2'
                d='M214.875 683.303L186.848 680.619L186.848 685.986L214.875 683.303Z'
                fill='black'
              />
              <path
                id='Polygon 28_2'
                d='M214.875 691.825L186.848 689.141L186.848 694.508L214.875 691.825Z'
                fill='black'
              />
            </g>
          </g>
          <g id='gas-lift-mandrels'>
            <path
              id='glm-5'
              d='M176.727 360.952L176.727 372.169L176.727 382.779L172.056 385.81L172.056 357.92L176.727 360.952Z'
              fill='black'
            />
            <path
              id='glm-4'
              d='M176.727 401.237L176.727 412.454L176.727 423.064L172.056 426.096L172.056 398.206L176.727 401.237Z'
              fill='black'
            />
            <path
              id='glm-3'
              d='M176.727 441.523L176.727 452.739L176.727 463.35L172.056 466.381L172.056 438.491L176.727 441.523Z'
              fill='black'
            />
            <path
              id='glm-2'
              d='M176.727 481.808L176.727 493.025L176.727 503.635L172.056 506.667L172.056 478.777L176.727 481.808Z'
              fill='black'
            />
            <path
              id='glm-1'
              d='M176.727 522.094L176.727 533.31L176.727 543.921L172.056 546.952L172.056 519.062L176.727 522.094Z'
              fill='black'
            />
          </g>
          <g id='downhole-safety-valve-control-line'>
            <path
              id='Vector 64'
              d='M250.687 132.477H181.587V298.267H172.056'
              stroke='black'
            />
            <ellipse
              id='Ellipse 12'
              cx='249.13'
              cy='132.477'
              rx='2.3356'
              ry='2.32416'
              fill='black'
            />
          </g>
          <g id='production-casing-left'>
            <path
              id='production-casing-lower'
              d='M128.458 587.238L128.458 759.225'
              stroke='black'
            />
            <path
              id='production-casing-shoe'
              d='M128.458 755.352L128.458 760H119.115L128.458 755.352Z'
              fill='black'
            />
            <g id='production-casing-cement'>
              <line
                id='Line 126'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 113.044 520.456)'
                stroke='black'
              />
              <line
                id='Line 127'
                y1='-0.5'
                x2='24.163'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 111.33 539.205)'
                stroke='black'
              />
              <line
                id='Line 128'
                y1='-0.5'
                x2='24.163'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 111.33 556.249)'
                stroke='black'
              />
              <line
                id='Line 129'
                y1='-0.5'
                x2='26.3596'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 109.773 574.842)'
                stroke='black'
              />
              <line
                id='Line 130'
                y1='-0.5'
                x2='23.0647'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 112.109 589.562)'
                stroke='black'
              />
              <line
                id='Line 131'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 113.044 605.675)'
                stroke='black'
              />
              <line
                id='Line 132'
                y1='-0.5'
                x2='20.868'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 113.666 622.1)'
                stroke='black'
              />
              <line
                id='Line 133'
                y1='-0.5'
                x2='19.7697'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 114.444 638.369)'
                stroke='black'
              />
              <line
                id='Line 134'
                y1='-0.5'
                x2='20.868'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 113.666 656.188)'
                stroke='black'
              />
              <path
                id='Line 135'
                d='M116.505 669.859L128.183 658.238'
                stroke='black'
              />
              <path
                id='Line 136'
                d='M113.39 691.05L120.786 683.69L128.183 676.33'
                stroke='black'
              />
              <path
                id='Line 137'
                d='M116.505 705.77L128.183 694.149'
                stroke='black'
              />
              <path
                id='Line 138'
                d='M117.786 723.862L128.182 713.517'
                stroke='black'
              />
              <path
                id='Line 139_3'
                d='M119.619 739.083L128.183 730.561'
                stroke='black'
              />
              <path
                id='Line 140_3'
                d='M121.176 753.802L128.183 746.83'
                stroke='black'
              />
            </g>
            <path
              id='production-casing-cement-curve'
              d='M106.27 535.331L110.552 538.818V544.241L108.605 550.051L110.552 553.15V558.96V567.87L108.605 574.067L112.887 579.878L110.552 585.688L112.887 592.273L110.552 597.696L112.887 603.507L110.552 609.317L112.887 614.74V622.487L116.39 629.072L112.887 636.045L116.39 642.243V649.602L112.887 655.025V661.223L116.39 667.421V677.492L112.887 690.275L116.39 697.635V706.544L119.505 711.58L116.39 721.264L119.505 730.173V734.822V739.47V745.28V751.865L122.229 756.126L125.344 758.451'
              stroke='black'
            />
            <g id='production-casing-valve-2'>
              <g id='production-casing-valve'>
                <ellipse
                  id='Ellipse 1_10'
                  cx='10.8732'
                  cy='10.8119'
                  rx='10.8732'
                  ry='10.8119'
                  transform='matrix(0.714257 -0.699883 0.714257 0.699883 0 172.488)'
                  fill='white'
                  stroke='black'
                />
                <path
                  id='Vector 6_10'
                  d='M7.89067 165L23.2986 180.098'
                  stroke='black'
                />
                <path
                  id='Vector 7_10'
                  d='M7.84695 180.177L23.2542 165.08'
                  stroke='black'
                />
              </g>
              <path
                id='Vector 51'
                d='M34.2554 165.015H22.5774'
                stroke='black'
              />
              <path id='Vector 52' d='M34.2554 180.51H22.5774' stroke='black' />
            </g>
            <g id='production-casing-upper'>
              <g id='Group 35'>
                <path
                  id='production-casing-upper_2'
                  d='M128.068 586.463V199.103L80.4106 180.51H48.6582'
                  stroke='black'
                />
                <path
                  id='Vector 67'
                  d='M66.9537 165.015H48.269'
                  stroke='black'
                />
              </g>
            </g>
            <g id='production-casing-valve-1'>
              <ellipse
                id='Ellipse 1_11'
                cx='10.8732'
                cy='10.8119'
                rx='10.8732'
                ry='10.8119'
                transform='matrix(0.714257 -0.699883 0.714257 0.699883 25.6915 172.488)'
                fill='white'
                stroke='black'
              />
              <path
                id='Vector 6_11'
                d='M33.5822 165L48.9902 180.098'
                stroke='black'
              />
              <path
                id='Vector 7_11'
                d='M33.5385 180.177L48.9458 165.08'
                stroke='black'
              />
            </g>
            <g id='production-casing-seal'>
              <g id='Group 6'>
                <rect
                  id='Rectangle 19'
                  x='67.0024'
                  y='151.07'
                  width='13.235'
                  height='13.945'
                  stroke='black'
                />
                <path
                  id='Line 95'
                  d='M67.3917 164.764L80.2374 151.07'
                  stroke='black'
                />
                <path
                  id='Line 96'
                  d='M79.8482 164.628L67.229 151.523'
                  stroke='black'
                />
              </g>
            </g>
          </g>
          <g id='production-casing-right'>
            <path
              id='production-casing-lower_2'
              d='M186.848 587.238L186.848 760'
              stroke='black'
            />
            <path
              id='production-casing-shoe_2'
              d='M186.848 755.352L186.848 760H196.19L186.848 755.352Z'
              fill='black'
            />
            <g id='production-casing-cement_2'>
              <line
                id='Line 126_2'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 202.262 520.456)'
                stroke='black'
              />
              <line
                id='Line 127_2'
                y1='-0.5'
                x2='24.163'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 203.976 539.205)'
                stroke='black'
              />
              <line
                id='Line 128_2'
                y1='-0.5'
                x2='24.163'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 203.976 556.249)'
                stroke='black'
              />
              <line
                id='Line 129_2'
                y1='-0.5'
                x2='26.3596'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 205.533 574.842)'
                stroke='black'
              />
              <line
                id='Line 130_2'
                y1='-0.5'
                x2='23.0647'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 203.197 589.562)'
                stroke='black'
              />
              <line
                id='Line 131_2'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 202.262 605.675)'
                stroke='black'
              />
              <line
                id='Line 132_2'
                y1='-0.5'
                x2='20.868'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 201.64 622.1)'
                stroke='black'
              />
              <line
                id='Line 133_2'
                y1='-0.5'
                x2='19.7697'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 200.861 638.369)'
                stroke='black'
              />
              <line
                id='Line 134_2'
                y1='-0.5'
                x2='20.868'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 201.64 656.188)'
                stroke='black'
              />
              <path
                id='Line 135_2'
                d='M198.801 669.859L187.123 658.238'
                stroke='black'
              />
              <path
                id='Line 136_2'
                d='M201.915 691.05L194.519 683.69L187.123 676.33'
                stroke='black'
              />
              <path
                id='Line 137_2'
                d='M198.801 705.77L187.123 694.149'
                stroke='black'
              />
              <path
                id='Line 138_2'
                d='M197.519 723.862L187.123 713.517'
                stroke='black'
              />
              <path
                id='Line 139_4'
                d='M195.687 739.083L187.123 730.561'
                stroke='black'
              />
              <path
                id='Line 140_4'
                d='M194.13 753.802L187.123 746.83'
                stroke='black'
              />
            </g>
            <path
              id='production-casing-cement-curve_2'
              d='M209.036 535.331L204.754 538.818V544.241L206.7 550.051L204.754 553.15V558.96V567.87L206.7 574.067L202.419 579.878L204.754 585.688L202.419 592.273L204.754 597.696L202.419 603.507L204.754 609.317L202.419 614.74V622.487L198.915 629.072L202.419 636.045L198.915 642.243V649.602L202.419 655.025V661.223L198.915 667.421V677.492L202.419 690.275L198.915 697.635V706.544L195.801 711.58L198.915 721.264L195.801 730.173V734.822V739.47V745.28V751.865L193.076 756.126L189.962 758.451'
              stroke='black'
            />
            <g id='production-casing'>
              <g id='Group 35_2'>
                <path
                  id='production-casing-upper_3'
                  d='M236.284 180.51L187.626 199.065V586.85'
                  stroke='black'
                />
              </g>
            </g>
            <g id='production-casing-seal_2'>
              <g id='Group 6_2'>
                <rect
                  id='Rectangle 19_2'
                  width='13.235'
                  height='13.945'
                  transform='matrix(-1 0 0 1 248.303 151.07)'
                  stroke='black'
                />
                <path
                  id='Line 95_2'
                  d='M247.914 164.764L235.068 151.07'
                  stroke='black'
                />
                <path
                  id='Line 96_2'
                  d='M235.457 164.628L248.077 151.523'
                  stroke='black'
                />
              </g>
            </g>
            <line
              id='Line 141'
              x1='128.458'
              y1='759.5'
              x2='187.626'
              y2='759.5'
              stroke='black'
            />
          </g>
          <g id='intermediate-casing-left'>
            <g id='intermediate-casing-cement'>
              <line
                id='Line 127_3'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 98.095 415.869)'
                stroke='black'
              />
              <line
                id='Line 128_3'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 98.095 432.913)'
                stroke='black'
              />
              <line
                id='Line 129_3'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 98.095 449.956)'
                stroke='black'
              />
              <line
                id='Line 130_3'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 98.095 467)'
                stroke='black'
              />
              <line
                id='Line 131_3'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 98.095 484.044)'
                stroke='black'
              />
              <line
                id='Line 132_3'
                y1='-0.5'
                x2='19.7697'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 99.4956 499.694)'
                stroke='black'
              />
              <line
                id='Line 133_3'
                y1='-0.5'
                x2='15.3765'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 102.61 513.639)'
                stroke='black'
              />
              <line
                id='Line 134_3'
                y1='-0.5'
                x2='11.4325'
                y2='-0.5'
                transform='matrix(0.73539 -0.677644 0.681235 0.732065 105.102 527.584)'
                stroke='black'
              />
            </g>
            <g id='intermediate-casing-valve-1'>
              <g id='Group 34'>
                <g id='production-casing-valve-1_2'>
                  <ellipse
                    id='Ellipse 1_12'
                    cx='10.8732'
                    cy='10.8119'
                    rx='10.8732'
                    ry='10.8119'
                    transform='matrix(0.714257 -0.699883 0.714257 0.699883 25.6915 201.927)'
                    stroke='black'
                  />
                  <path
                    id='Vector 6_12'
                    d='M33.5822 194.439L48.9902 209.537'
                    stroke='black'
                  />
                  <path
                    id='Vector 7_12'
                    d='M33.5385 209.617L48.9458 194.519'
                    stroke='black'
                  />
                </g>
              </g>
            </g>
            <g id='intermediate-casing-valve-2'>
              <g id='production-casing-valve_2'>
                <ellipse
                  id='Ellipse 1_13'
                  cx='10.8732'
                  cy='10.8119'
                  rx='10.8732'
                  ry='10.8119'
                  transform='matrix(0.714257 -0.699883 0.714257 0.699883 0 201.927)'
                  stroke='black'
                />
                <path
                  id='Vector 6_13'
                  d='M7.89067 194.439L23.2986 209.537'
                  stroke='black'
                />
                <path
                  id='Vector 7_13'
                  d='M7.84695 209.617L23.2542 194.519'
                  stroke='black'
                />
              </g>
              <path
                id='Vector 53'
                d='M34.2554 194.455H22.5774'
                stroke='black'
              />
              <path
                id='Vector 54'
                d='M34.2554 209.949H22.5774'
                stroke='black'
              />
            </g>
            <g id='intermediate-casing-seal'>
              <g id='Group 7'>
                <rect
                  id='Rectangle 19_3'
                  x='67.0024'
                  y='180.51'
                  width='13.235'
                  height='13.945'
                  stroke='black'
                />
                <path
                  id='Line 95_3'
                  d='M67.3917 194.203L80.2374 180.51'
                  stroke='black'
                />
                <path
                  id='Line 96_3'
                  d='M79.8482 194.067L67.229 180.962'
                  stroke='black'
                />
              </g>
            </g>
            <g id='intermediate-casing'>
              <path
                id='Vector 53_2'
                d='M66.9537 194.455L49.0475 194.455'
                stroke='black'
              />
              <g id='intermediate-casing_2'>
                <g id='Group 15'>
                  <path
                    id='Vector 53_3'
                    d='M113.276 534.557V223.119L80.1029 209.949H48.269'
                    stroke='black'
                  />
                </g>
              </g>
            </g>
            <path
              id='intermediate-casing-shoe'
              d='M112.887 529.908L112.887 534.557H103.545L112.887 529.908Z'
              fill='black'
            />
            <path
              id='intermediate-casing-cement-curve'
              d='M107.827 536.881L105.102 534.557L102.377 524.873L99.6521 519.45L102.377 513.639L99.6521 505.117V497.37L96.1487 493.496L97.7057 485.362L95.3701 477.227L100.041 471.804L95.3701 463.282L97.7057 457.859L96.9272 452.049V449.725L92.6453 446.626'
              stroke='black'
            />
          </g>
          <g id='intermediate-casing-right'>
            <g id='intermediate-casing-cement_2'>
              <line
                id='Line 127_4'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 217.832 415.869)'
                stroke='black'
              />
              <line
                id='Line 128_4'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 217.832 432.913)'
                stroke='black'
              />
              <line
                id='Line 129_4'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 217.832 449.956)'
                stroke='black'
              />
              <line
                id='Line 130_4'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 217.832 467)'
                stroke='black'
              />
              <line
                id='Line 131_4'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 217.832 484.044)'
                stroke='black'
              />
              <line
                id='Line 132_4'
                y1='-0.5'
                x2='19.7697'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 216.432 499.694)'
                stroke='black'
              />
              <line
                id='Line 133_4'
                y1='-0.5'
                x2='15.3765'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 213.318 513.639)'
                stroke='black'
              />
              <line
                id='Line 134_4'
                y1='-0.5'
                x2='11.4325'
                y2='-0.5'
                transform='matrix(-0.73539 -0.677644 -0.681235 0.732065 210.826 527.584)'
                stroke='black'
              />
            </g>
            <g id='intermediate-casing-seal_2'>
              <g id='Group 7_2'>
                <rect
                  id='Rectangle 19_4'
                  width='13.235'
                  height='13.945'
                  transform='matrix(-1 0 0 1 248.925 180.51)'
                  stroke='black'
                />
                <path
                  id='Line 95_4'
                  d='M248.536 194.203L235.69 180.51'
                  stroke='black'
                />
                <path
                  id='Line 96_4'
                  d='M236.079 194.067L248.698 180.962'
                  stroke='black'
                />
              </g>
            </g>
            <g id='intermediate-casing_3'>
              <g id='intermediate-casing_4'>
                <g id='Group 15_2'>
                  <path
                    id='Vector 53_4'
                    d='M235.825 209.949L202.651 223.119V534.557'
                    stroke='black'
                  />
                </g>
              </g>
            </g>
            <path
              id='intermediate-casing-shoe_2'
              d='M203.04 529.908L203.04 534.557H212.383L203.04 529.908Z'
              fill='black'
            />
            <path
              id='intermediate-casing-cement-curve_2'
              d='M208.101 536.881L210.826 534.557L213.55 524.873L216.275 519.45L213.55 513.639L216.275 505.117V497.37L219.779 493.496L218.222 485.362L220.557 477.227L215.886 471.804L220.557 463.282L218.222 457.859L219 452.049V449.725L223.282 446.626'
              stroke='black'
            />
          </g>
          <g id='surface-casing-left'>
            <g id='surface-casing'>
              <path
                id='Vector 57'
                d='M66.9537 223.894H49.0475'
                stroke='black'
              />
              <path
                id='line'
                d='M97.7057 441.59L97.7057 239.388H49.0475'
                stroke='black'
              />
            </g>
            <path
              id='surface-casing-shoe'
              d='M97.3165 436.942L97.3165 441.59H87.9741L97.3165 436.942Z'
              fill='black'
            />
            <g id='surface-casing-cement'>
              <line
                id='Line 125'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 82.5244 261.7)'
                stroke='black'
              />
              <line
                id='Line 126_3'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 82.5244 278.743)'
                stroke='black'
              />
              <line
                id='Line 127_5'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 82.5244 295.787)'
                stroke='black'
              />
              <line
                id='Line 128_5'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 82.5244 312.831)'
                stroke='black'
              />
              <line
                id='Line 129_5'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 82.5244 329.875)'
                stroke='black'
              />
              <line
                id='Line 130_5'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 82.5244 346.919)'
                stroke='black'
              />
              <line
                id='Line 131_5'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 82.5244 363.963)'
                stroke='black'
              />
              <line
                id='Line 132_5'
                y1='-0.5'
                x2='19.7697'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 83.9249 379.613)'
                stroke='black'
              />
              <line
                id='Line 133_5'
                y1='-0.5'
                x2='15.3765'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 87.0391 393.558)'
                stroke='black'
              />
              <line
                id='Line 134_5'
                y1='-0.5'
                x2='15.3765'
                y2='-0.5'
                transform='matrix(0.70884 -0.705369 0.70884 0.705369 87.0391 410.601)'
                stroke='black'
              />
              <path
                id='Line 135_3'
                d='M87.2671 426.871L97.6633 416.525'
                stroke='black'
              />
            </g>
            <path
              id='surface-casing-cement-curve'
              d='M82.5244 374.964L83.6921 378.838L85.2491 383.486L85.2491 386.585L86.4169 390.459L86.4169 393.558L86.4169 397.431L85.2491 401.305L86.4169 405.178L86.4169 409.439L85.6384 414.088L86.8062 417.187L85.6384 419.511L86.8062 424.546L87.5847 426.871L86.8062 429.195L87.5847 432.681L86.8062 435.392L87.974 438.879L87.974 441.59L90.3096 443.914L93.0344 446.626'
              stroke='black'
            />
            <g id='surface-casing-seal'>
              <g id='Group 6_3'>
                <rect
                  id='Rectangle 19_5'
                  x='67.0024'
                  y='209.949'
                  width='13.235'
                  height='13.945'
                  stroke='black'
                />
                <path
                  id='Line 95_5'
                  d='M67.3917 223.643L80.2374 209.949'
                  stroke='black'
                />
                <path
                  id='Line 96_5'
                  d='M79.8482 223.507L67.229 210.401'
                  stroke='black'
                />
              </g>
            </g>
            <g id='surface-casing-valve-1'>
              <ellipse
                id='Ellipse 1_14'
                cx='10.8732'
                cy='10.8119'
                rx='10.8732'
                ry='10.8119'
                transform='matrix(0.714257 -0.699883 0.714257 0.699883 25.6915 231.367)'
                stroke='black'
              />
              <path
                id='Vector 6_14'
                d='M33.5822 223.879L48.9902 238.977'
                stroke='black'
              />
              <path
                id='Vector 7_14'
                d='M33.5385 239.056L48.9457 223.959'
                stroke='black'
              />
            </g>
            <g id='surface-casing-valve-2'>
              <ellipse
                id='Ellipse 1_15'
                cx='10.8732'
                cy='10.8119'
                rx='10.8732'
                ry='10.8119'
                transform='matrix(0.714257 -0.699883 0.714257 0.699883 0 231.367)'
                stroke='black'
              />
              <path
                id='Vector 6_15'
                d='M7.89067 223.879L23.2986 238.977'
                stroke='black'
              />
              <path
                id='Vector 7_15'
                d='M7.84695 239.056L23.2542 223.959'
                stroke='black'
              />
              <path
                id='Vector 55'
                d='M34.2554 223.894H22.5774'
                stroke='black'
              />
              <path
                id='Vector 56'
                d='M34.2554 239.388H22.5774'
                stroke='black'
              />
            </g>
          </g>
          <g id='surface-casing-right'>
            <g id='surface-casing_2'>
              <path
                id='line_2'
                d='M218.222 441.59L218.222 239.388L248.352 239.388'
                stroke='black'
              />
            </g>
            <path
              id='surface-casing-shoe_2'
              d='M218.611 436.942L218.611 441.59H227.953L218.611 436.942Z'
              fill='black'
            />
            <g id='surface-casing-cement_2'>
              <line
                id='Line 125_2'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 233.403 261.7)'
                stroke='black'
              />
              <line
                id='Line 126_4'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 233.403 278.743)'
                stroke='black'
              />
              <line
                id='Line 127_6'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 233.403 295.787)'
                stroke='black'
              />
              <line
                id='Line 128_6'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 233.403 312.831)'
                stroke='black'
              />
              <line
                id='Line 129_6'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 233.403 329.875)'
                stroke='black'
              />
              <line
                id='Line 130_6'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 233.403 346.919)'
                stroke='black'
              />
              <line
                id='Line 131_6'
                y1='-0.5'
                x2='21.7456'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 233.403 363.963)'
                stroke='black'
              />
              <line
                id='Line 132_6'
                y1='-0.5'
                x2='19.7697'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 232.002 379.613)'
                stroke='black'
              />
              <line
                id='Line 133_6'
                y1='-0.5'
                x2='15.3765'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 228.888 393.558)'
                stroke='black'
              />
              <line
                id='Line 134_6'
                y1='-0.5'
                x2='15.3765'
                y2='-0.5'
                transform='matrix(-0.70884 -0.705369 -0.70884 0.705369 228.888 410.601)'
                stroke='black'
              />
              <path
                id='Line 135_4'
                d='M228.66 426.871L218.264 416.525'
                stroke='black'
              />
            </g>
            <path
              id='surface-casing-cement-curve_2'
              d='M233.403 374.964L232.235 378.838L230.678 383.486L230.678 386.585L229.51 390.459L229.51 393.558L229.51 397.431L230.678 401.305L229.51 405.178L229.51 409.439L230.289 414.088L229.121 417.187L230.289 419.511L229.121 424.546L228.343 426.871L229.121 429.195L228.343 432.681L229.121 435.392L227.953 438.879L227.953 441.59L225.618 443.914L222.893 446.626'
              stroke='black'
            />
            <g id='surface-casing-seal_2'>
              <g id='Group 6_4'>
                <rect
                  id='Rectangle 19_6'
                  width='13.235'
                  height='13.945'
                  transform='matrix(-1 0 0 1 248.925 209.949)'
                  stroke='black'
                />
                <path
                  id='Line 95_6'
                  d='M248.536 223.643L235.69 209.949'
                  stroke='black'
                />
                <path
                  id='Line 96_6'
                  d='M236.079 223.507L248.698 210.401'
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
                  x='61.504'
                  y='239.388'
                  width='6.22825'
                  height='15.4944'
                  fill='#959595'
                  stroke='black'
                />
              </g>
            </g>
            <path
              id='conductor-casing'
              d='M67.7323 254.883H81.7458V375.352'
              stroke='black'
            />
            <path
              id='conductor-casing-shoe'
              d='M81.7458 371.091L81.7458 375.739H72.4035L81.7458 371.091Z'
              fill='black'
            />
          </g>
          <g id='conductor-casing-right'>
            <g id='conductor-casing-seal_2'>
              <g id='Group 24_2'>
                <rect
                  id='Rectangle 24_2'
                  width='6.22825'
                  height='15.4944'
                  transform='matrix(-1 0 0 1 255.358 239.388)'
                  fill='#959595'
                  stroke='black'
                />
              </g>
              <g id='Group 25'>
                <rect
                  id='Rectangle 24_3'
                  width='6.22825'
                  height='15.4944'
                  transform='matrix(-1 0 0 1 255.358 223.894)'
                  fill='#959595'
                  stroke='black'
                />
              </g>
              <g id='Group 26'>
                <rect
                  id='Rectangle 24_4'
                  width='6.22825'
                  height='15.4944'
                  transform='matrix(-1 0 0 1 255.358 194.455)'
                  fill='#959595'
                  stroke='black'
                />
              </g>
              <g id='Group 27'>
                <rect
                  id='Rectangle 24_5'
                  width='6.22825'
                  height='15.4944'
                  transform='matrix(-1 0 0 1 255.358 165.015)'
                  fill='#959595'
                  stroke='black'
                />
              </g>
            </g>
            <path
              id='conductor-casing_2'
              d='M249.13 254.883H234.338V374.964'
              stroke='black'
            />
            <path
              id='conductor-casing-shoe_2'
              d='M234.338 371.091L234.338 375.739H243.68L234.338 371.091Z'
              fill='black'
            />
          </g>
          <g id='downhole-fluid'>
            <ellipse
              id='Ellipse 13'
              cx='147.143'
              cy='702.671'
              rx='1.55706'
              ry='1.54944'
              fill='black'
            />
            <ellipse
              id='Ellipse 21'
              cx='161.935'
              cy='702.671'
              rx='1.55706'
              ry='1.54944'
              fill='black'
            />
            <ellipse
              id='Ellipse 14'
              cx='140.136'
              cy='696.473'
              rx='1.55706'
              ry='1.54944'
              fill='black'
            />
            <ellipse
              id='Ellipse 15'
              cx='147.143'
              cy='691.05'
              rx='1.55706'
              ry='1.54944'
              fill='black'
            />
            <ellipse
              id='Ellipse 16'
              cx='161.935'
              cy='686.402'
              rx='1.55706'
              ry='1.54944'
              fill='black'
            />
            <ellipse
              id='Ellipse 23'
              cx='161.935'
              cy='675.556'
              rx='1.55706'
              ry='1.54944'
              fill='black'
            />
            <ellipse
              id='Ellipse 17'
              cx='166.606'
              cy='694.149'
              rx='1.55706'
              ry='1.54944'
              fill='black'
            />
            <ellipse
              id='Ellipse 22'
              cx='174.391'
              cy='699.572'
              rx='1.55706'
              ry='1.54944'
              fill='black'
            />
            <ellipse
              id='Ellipse 18'
              cx='172.056'
              cy='682.528'
              rx='1.55706'
              ry='1.54944'
              fill='black'
            />
            <ellipse
              id='Ellipse 19'
              cx='137.8'
              cy='680.979'
              rx='1.55706'
              ry='1.54944'
              fill='black'
            />
            <ellipse
              id='Ellipse 20'
              cx='149.478'
              cy='677.88'
              rx='1.55706'
              ry='1.54944'
              fill='black'
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
