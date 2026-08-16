import React, { useState } from "react";

type MouseProps = {
  render: (x: number, y: number) => React.ReactNode;
};

function MouseTracker({ render }: MouseProps) {
  const [position, setPosition] = useState({x: 0, y: 0,});

  return (
    <div
      onMouseMove={(e) =>
        setPosition({
          x: e.clientX,
          y: e.clientY,
        })
      }
    >
      {render(position.x, position.y)}
    </div>
  );
}

export default MouseTracker;