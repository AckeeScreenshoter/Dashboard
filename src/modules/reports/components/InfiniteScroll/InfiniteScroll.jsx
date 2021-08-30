import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import PropTypes from 'prop-types';

import { Row } from 'antd';
import { DataSkeleton } from 'modules/ui';

const InfiniteScrollWrap = ({ items, fetchNext, hasNext }) => {
    return (
        <InfiniteScroll
            initialLoad
            pageStart={0}
            loadMore={fetchNext}
            hasMore={hasNext}
            loader={<DataSkeleton key={'loader'} />}
        >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>{items}</Row>
        </InfiniteScroll>
    );
};
InfiniteScrollWrap.propTypes = {
    items: PropTypes.array,
    fetchNext: PropTypes.func,
    hasNext: PropTypes.bool,
};

export default InfiniteScrollWrap;
