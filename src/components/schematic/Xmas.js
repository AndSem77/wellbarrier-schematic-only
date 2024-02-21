import { useContext, useRef } from 'react';
import { BarrierContext } from '../../context/BarrierContext';

export default function Xmas() {
  const { currentData, setCurrentData, setBarrierColor } =
    useContext(BarrierContext);

  console.log('curr in xmas', currentData);
  return (
    <svg
      width='175'
      height='179'
      viewBox='0 0 175 179'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='well-barrier'>
        <g id='tree-cap'>
          <rect
            id='Rectangle 1'
            x='61.1365'
            y='0.5'
            width='53.2943'
            height='16.1847'
            rx='2.5'
            fill='white'
            stroke='black'
          />
          <path id='Vector 1' d='M66.4538 0V16.5482' stroke='black' />
          <path id='Vector 2' d='M76.7955 0V16.5482' stroke='black' />
          <path id='Vector 3' d='M87.7837 0V16.5482' stroke='black' />
          <path id='Vector 4' d='M98.7718 0V16.5482' stroke='black' />
          <path id='Vector 5' d='M109.76 0V16.5482' stroke='black' />
        </g>
        <g id='cv'>
          <ellipse
            id='Ellipse 1'
            cx='18'
            cy='17.8985'
            rx='18'
            ry='17.8985'
            transform='matrix(0.712538 -0.701634 0.712538 0.701634 61.9291 39.8417)'
            fill='none'
            stroke={setBarrierColor('crown valve')}
          />
          <path
            id='Vector 6'
            d='M74.9603 27.4149L100.406 52.4711'
            stroke={setBarrierColor('crown valve')}
          />
          <path
            id='Vector 7'
            d='M74.888 52.6025L100.333 27.5474'
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
            transform='matrix(0.712538 -0.701634 0.712538 0.701634 62 112.259)'
            stroke={setBarrierColor('surface safety valve')}
          />
          <path
            id='Vector 6_2'
            d='M75.032 99.8326L100.153 125.207'
            stroke={setBarrierColor('surface safety valve')}
          />
          <path
            id='Vector 7_2'
            d='M74.9987 125.059L100.443 100.003'
            stroke={setBarrierColor('surface safety valve')}
          />
        </g>
        <g id='lmv'>
          <ellipse
            id='Ellipse 1_3'
            cx='18'
            cy='18'
            rx='18'
            ry='18'
            transform='matrix(0.712538 -0.701634 0.712538 0.701634 62 153.259)'
            fill='white'
            stroke={setBarrierColor('lower master valve')}
          />
          <path
            id='Vector 6_3'
            d='M75.0324 140.833L100.226 165.641'
            stroke={setBarrierColor('lower master valve')}
          />
          <path
            id='Vector 7_3'
            d='M75.0324 166.092L100.477 141.037'
            stroke={setBarrierColor('lower master valve')}
          />
        </g>
        <g id='wv'>
          <circle
            id='Ellipse 1_4'
            cx='18'
            cy='18'
            r='18'
            transform='matrix(0.712538 -0.701634 0.712538 0.701634 25 77.3965)'
            fill='white'
            stroke={setBarrierColor('wing valve')}
          />
          <path
            id='Vector 6_4'
            d='M38.0327 64.9707L63.226 89.7785'
            stroke={setBarrierColor('wing valve')}
          />
          <path
            id='Vector 7_4'
            d='M38.0327 90.2296L63.4772 65.1744'
            stroke={setBarrierColor('wing valve')}
          />
        </g>
        <g id='kwv'>
          <ellipse
            id='Ellipse 1_5'
            cx='18'
            cy='17.9533'
            rx='18'
            ry='17.9533'
            transform='matrix(0.712538 -0.701634 0.712538 0.701634 98 77.3965)'
            fill='white'
            stroke={setBarrierColor('kill wing valve')}
          />
          <path
            id='Vector 6_5'
            d='M111.032 64.9702L136.153 90.3448'
            stroke={setBarrierColor('kill wing valve')}
          />
          <path
            id='Vector 7_5'
            d='M110.999 90.1963L136.443 65.1412'
            stroke={setBarrierColor('kill wing valve')}
          />
        </g>
        <g id='tree-body'>
          <path
            id='Vector 9'
            d='M69 59V23H46.5446L33 36.1186V59H69Z'
            stroke='black'
          />
          <path
            id='Vector 13'
            d='M105.882 58.913V22.913H128.337L141.882 36.0316V58.913H105.882Z'
            stroke='black'
          />
          <path id='Vector 10' d='M69.0391 23.2312V17.1847' stroke='black' />
          <path id='Vector 11' d='M105.882 23.2312V17.1847' stroke='black' />
          <path id='Vector 18' d='M51 95H1' stroke='black' />
          <path id='Vector 19' d='M32.6717 59H1' stroke='black' />
          <path
            id='Vector 22'
            d='M32.7547 150.61L1 168.22V171H69V95H32.7547V150.61Z'
            fill='white'
            stroke='black'
          />
          <path
            id='Vector 26'
            d='M142.245 150.61L174 168.22V171H106V95H142.245V150.61Z'
            fill='white'
            stroke='black'
          />
          <g id='kwv-flange'>
            <rect
              id='Rectangle 3'
              x='142.5'
              y='52.5'
              width='8.69541'
              height='49.9176'
              stroke='black'
            />
            <g id='Rectangle 5'>
              <mask id='path-31-inside-1_122_2' fill='white'>
                <path d='M151.695 57.7283H154.281V61.5471H151.695V57.7283Z' />
              </mask>
              <path
                d='M154.281 57.7283H155.281V56.7283H154.281V57.7283ZM154.281 61.5471V62.5471H155.281V61.5471H154.281ZM151.695 58.7283H154.281V56.7283H151.695V58.7283ZM153.281 57.7283V61.5471H155.281V57.7283H153.281ZM154.281 60.5471H151.695V62.5471H154.281V60.5471Z'
                fill='black'
                mask='url(#path-31-inside-1_122_2)'
              />
            </g>
            <g id='Rectangle 6'>
              <mask id='path-33-inside-2_122_2' fill='white'>
                <path d='M151.695 94.007H154.281V97.8258H151.695V94.007Z' />
              </mask>
              <path
                d='M154.281 94.007H155.281V93.007H154.281V94.007ZM154.281 97.8258V98.8258H155.281V97.8258H154.281ZM151.695 95.007H154.281V93.007H151.695V95.007ZM153.281 94.007V97.8258H155.281V94.007H153.281ZM154.281 96.8258H151.695V98.8258H154.281V96.8258Z'
                fill='black'
                mask='url(#path-33-inside-2_122_2)'
              />
            </g>
            <g id='Rectangle 7'>
              <mask id='path-35-inside-3_122_2' fill='white'>
                <path d='M151.695 66.6389H154.281V70.4577H151.695V66.6389Z' />
              </mask>
              <path
                d='M154.281 66.6389H155.281V65.6389H154.281V66.6389ZM154.281 70.4577V71.4577H155.281V70.4577H154.281ZM151.695 67.6389H154.281V65.6389H151.695V67.6389ZM153.281 66.6389V70.4577H155.281V66.6389H153.281ZM154.281 69.4577H151.695V71.4577H154.281V69.4577Z'
                fill='black'
                mask='url(#path-35-inside-3_122_2)'
              />
            </g>
            <g id='Rectangle 8'>
              <mask id='path-37-inside-4_122_2' fill='white'>
                <path d='M151.695 76.1859H154.281V80.0047H151.695V76.1859Z' />
              </mask>
              <path
                d='M154.281 76.1859H155.281V75.1859H154.281V76.1859ZM154.281 80.0047V81.0047H155.281V80.0047H154.281ZM151.695 77.1859H154.281V75.1859H151.695V77.1859ZM153.281 76.1859V80.0047H155.281V76.1859H153.281ZM154.281 79.0047H151.695V81.0047H154.281V79.0047Z'
                fill='black'
                mask='url(#path-37-inside-4_122_2)'
              />
            </g>
            <g id='Rectangle 9'>
              <mask id='path-39-inside-5_122_2' fill='white'>
                <path d='M151.695 84.46H154.281V88.2788H151.695V84.46Z' />
              </mask>
              <path
                d='M154.281 84.46H155.281V83.46H154.281V84.46ZM154.281 88.2788V89.2788H155.281V88.2788H154.281ZM151.695 85.46H154.281V83.46H151.695V85.46ZM153.281 84.46V88.2788H155.281V84.46H153.281ZM154.281 87.2788H151.695V89.2788H154.281V87.2788Z'
                fill='black'
                mask='url(#path-39-inside-5_122_2)'
              />
            </g>
          </g>
        </g>
        <g id='wv-arrows'>
          <path
            id='Arrow 1'
            d='M0.999969 77.2808L5.99997 80.1676L5.99997 74.3941L0.999969 77.2808ZM23 76.7808L5.49997 76.7808L5.49997 77.7808L23 77.7808L23 76.7808Z'
            fill='black'
          />
          <path
            id='Arrow 3'
            d='M0.999969 88.9153L5.99997 91.8021L5.99997 86.0286L0.999969 88.9153ZM23 88.4153L5.49997 88.4153L5.49997 89.4153L23 89.4153L23 88.4153Z'
            fill='black'
          />
          <path
            id='Arrow 2'
            d='M0.999969 65L5.99997 67.8868L5.99997 62.1133L0.999969 65ZM23 64.5L5.49997 64.5L5.49997 65.5L23 65.5L23 64.5Z'
            fill='black'
          />
        </g>
      </g>
    </svg>
  );
}
