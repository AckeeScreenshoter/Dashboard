import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Row } from 'antd';
import { DataSkeleton } from 'modules/ui';

const InfiniteScrollWrap = ({ items, fetchNext, hasNext }) => {
    return (
        <InfiniteScroll initialLoad pageStart={0} loadMore={fetchNext} hasMore={hasNext} loader={<DataSkeleton />}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>{items}</Row>
        </InfiniteScroll>
    );
};

export default InfiniteScrollWrap;
