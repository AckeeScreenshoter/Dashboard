import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Row } from 'antd';
import { useReportsFetcher } from 'modules/reports';

const InfiniteScrollWrap = ({ items, fetchNext }) => {
    return (
        <InfiniteScroll pageStart={0} loadMore={null} hasMore={true} loader={<div key={0}>Loading ...</div>}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>{items}</Row>
        </InfiniteScroll>
    );
};

export default InfiniteScrollWrap;
