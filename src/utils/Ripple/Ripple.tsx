import React, { useState, useLayoutEffect } from "react";
import { RippleContainer } from "./Ripple.styled";
import PropTypes from "prop-types";

interface RippleProps {
    duration?: number;
    color?: string;
}

interface RippleState {
    x: number;
    y: number;
    size: number;
}

const useDebouncedRippleCleanUp = (
    rippleCount: number,
    duration: number,
    cleanUpFunction: () => void
) => {
    useLayoutEffect(() => {
        let bounce: any = null;
        if (rippleCount > 0) {
            clearTimeout(bounce!);

            bounce = setTimeout(() => {
                cleanUpFunction();
                clearTimeout(bounce!);
            }, duration * 2);
        }

        return () => clearTimeout(bounce!);
    }, [rippleCount, duration, cleanUpFunction]);
};

const Ripple: React.FC<RippleProps> = ({ duration = 900, color }) => {
    const [rippleArray, setRippleArray] = useState<RippleState[]>([]);

    useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
        setRippleArray([]);
    });

    const addRipple = (event: any) => {
        const rippleContainer = event.currentTarget.getBoundingClientRect();
        const size =
            rippleContainer.width > rippleContainer.height
                ? rippleContainer.width
                : rippleContainer.height;
        const x = event.pageX - rippleContainer.x - size / 2;
        const y = event.pageY - rippleContainer.y - size / 2;
        const newRipple: RippleState = {
            x,
            y,
            size,
        };

        setRippleArray([...rippleArray, newRipple]);
    };

    return (
        <RippleContainer duration={duration} color={color ?? "fff"} onMouseDown={addRipple}>
            {rippleArray.length > 0 &&
                rippleArray.map((ripple, index) => {
                    return (
                        <span
                            key={"span" + index}
                            style={{
                                top: ripple.y,
                                left: ripple.x,
                                width: ripple.size,
                                height: ripple.size,
                            }}
                        />
                    );
                })}
        </RippleContainer>
    );
};

Ripple.propTypes = {
    duration: PropTypes.number,
    color: PropTypes.string,
};

Ripple.defaultProps = {
    duration: 850,
    color: "#fff",
};

export default Ripple;
