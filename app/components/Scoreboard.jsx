import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from '../css/components/scoreboard';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

const cx = classNames.bind(styles);

const Scoreboard = ({topics}) => {
  const topicListItems = topics.map((topic, key) => {
    return (
      <Chip key={key} backgroundColor="#00acc1" className={cx('Chip')} >
        <Avatar backgroundColor="#00838f" size={32}>{topic.count}</Avatar>
        {topic.text}
      </Chip>
    );
  });

  return (
    <Paper zDepth={2} rounded={false}>
      <Toolbar>
        <ToolbarGroup >
          <ToolbarTitle className={cx('ToolbarTitle')} text="Vote count" />
        </ToolbarGroup>
      </Toolbar>
      {topicListItems}
    </Paper>
  );
};

Scoreboard.propTypes = {
  topics: PropTypes.array.isRequired
};

export default Scoreboard;
