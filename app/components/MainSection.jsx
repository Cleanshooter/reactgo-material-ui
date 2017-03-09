import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import TopicItem from '../components/TopicItem';
import styles from '../css/components/main-section';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import {Table, TableBody } from 'material-ui/Table';

const cx = classNames.bind(styles);

const MainSection = ({ topics, onIncrement, onDecrement, onDestroy }) => {
  const topicItems = topics.map((topic, key) => {
    return (
      <TopicItem
        index={key}
        id={topic.id}
        key={key}
        text={topic.text}
        incrementCount={onIncrement}
        decrementCount={onDecrement}
        destroyTopic={onDestroy} />);
  });

  return (
    <Paper zDepth={2} rounded={false}>
      <Toolbar>
        <ToolbarGroup >
          <ToolbarTitle className={cx('ToolbarTitle')} text="Vote for your favorite hack day idea" />
        </ToolbarGroup>
      </Toolbar>
      <Table>
        <TableBody>
          {topicItems}
        </TableBody>
      </Table>
    </Paper>
  );
};

MainSection.propTypes = {
  topics: PropTypes.array.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onDestroy: PropTypes.func.isRequired
};

export default MainSection;
