import React from 'react';
import { FixedSizeList } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { DataCard } from 'modules/ui';
const InfiniteScroll = ({ hasNextPage, loadNextPage, isNextPageLoading, items }) => {
    const itemCount = hasNextPage ? items.length + 1 : items.length;
    const loadMoreItems = isNextPageLoading ? () => {} : console.log('load next page');
    const isItemLoaded = index => !hasNextPage || index < items.length;
    const Item = ({ index, style }) => {
        let message;
        if (!isItemLoaded(index)) {
            console.log('loading');
        } else {
            message = items[index];
            console.log(items[index]);
        }

        return <DataCard message={message} />;
    };
    return (
        <>
            <InfiniteLoader isItemLoaded={isItemLoaded} itemCount={itemCount} loadMoreItems={loadMoreItems}>
                {({ onItemsRendered, ref }) => (
                    <FixedSizeList
                        className="List"
                        height={150}
                        itemSize={30}
                        ref={ref}
                        width={300}
                        itemCount={itemCount}
                        onItemsRendered={onItemsRendered}
                        ref={ref}
                    >
                        {Item}
                    </FixedSizeList>
                )}
            </InfiniteLoader>
        </>
    );
};

export default InfiniteScroll;
