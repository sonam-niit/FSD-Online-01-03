import type React from "react";

function withBorder<P extends object>(Component: React.ComponentType<P>) {
    return function EnhancedComponent(props: P) {

        return (
            <div style={{ border: "2px solid blue", padding: "10px" }}>
                <Component {...props} />
            </div>
        )
    };
}

export default withBorder;
// HOC 