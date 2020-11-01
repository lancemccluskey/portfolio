/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useTrail, animated, useSpring } from 'react-spring';

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translated3d(${x}px, ${y}px, 0) translate3d(-50%, -50%, 0)`;

const Home = () => {
  const [trail, setTrail] = useTrail(3, () => ({ xy: [0, 0], config: i => (i === 0 ? fast : slow)}));

  return (
    <div sx={{ variant: 'containers.hooksMain' }}>
      <svg sx={{ position: 'absolute', width: 0, height: 0}}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
        </filter>
      </svg>
      <div onMouseMove={e => setTrail({ xy: [e.clientX, e.clientY] })}>
        {trail.map((props, index) => (
          <animated.div key={index} sx={{ transform: props.xy.interpolate(trans)}} />
        ))}
      </div>
    </div>
  );
};

export default Home;
