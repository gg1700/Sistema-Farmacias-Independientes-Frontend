import { useMemo } from 'react';

function useFilteredData<TItem>(data: TItem[], filterCriteria: (item: TItem) => boolean, dependencies: unknown[]) {
    return useMemo(() => data.filter(filterCriteria), [data, ...dependencies]);
}

export default useFilteredData;
