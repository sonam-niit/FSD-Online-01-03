import type React from "react";

function withLoading<P>(Component: React.ComponentType<P>) {
    return function EnhancedComponent(props: P & {loading: boolean}){
        if (props.loading)
            return <h2>Loading.......</h2>
    
        return <Component {...props} />
    };
}

export default withLoading;
// HOC 