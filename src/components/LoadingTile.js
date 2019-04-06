import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";

const StyledTile = styled(animated.div)`
  height: 100%;
  width: 100%;
  background-color: white;
  position: absolute;
  top: 0;
  right: 0;
`;
const LoadingTile = props => {
  const [toggle, setToggle] = useState(false);
  const animation = useSpring({
    delay: props.index * 50,
    to: { opacity: toggle ? 0.75 : 0 },
    onRest: () => {
      setToggle(!toggle);
    },
    config: config.slow
  });
  return <StyledTile style={animation} />;
};

export default LoadingTile;
