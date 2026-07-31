import type { ReactNode } from 'react';

const styles = {
    wrapper: "w-full flex justify-center",
    inner: "w-full max-w-5xl flex flex-col gap-3",
}

interface FiltersWrapperProps {
    children: ReactNode;
}

function FiltersWrapper({ children }: FiltersWrapperProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>{children}</div>
        </div>
    );
}

export default FiltersWrapper;