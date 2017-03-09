import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from '../css/components/topic-item';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Add from 'material-ui/svg-icons/content/add';
import Remove from 'material-ui/svg-icons/content/remove';
import Clear from 'material-ui/svg-icons/content/clear';

const cx = classNames.bind(styles);

const TopicItem = ({ text, id, incrementCount, decrementCount, destroyTopic }) => {
  const onIncrement = () => {
    incrementCount(id);
  };
  const onDecrement = () => {
    decrementCount(id);
  };
  const onDestroy = () => {
    destroyTopic(id);
  };
  /*
    <li className={cx('topic-item')} key={id}>
      <span className={cx('topic')}>{text}</span>
      <button
        className={cx('button', 'increment')}
        onClick={onIncrement}>+</button>
      <button
        className={cx('button', 'decrement')}
        onClick={onDecrement}>-</button>
      <button
        className={cx('button', 'destroy')}
        onClick={onDestroy}>{String.fromCharCode(215)}</button>
    </li>
  */

  return (
    <TableRow>
      <TableRowColumn>{text}</TableRowColumn>
      <TableRowColumn>
        <FloatingActionButton 
          mini={true} 
          onTouchTap={onIncrement}
          backgroundColor="#2e7d32" //--md-green-800
        >
          <Add />
        </FloatingActionButton>
      </TableRowColumn>
      <TableRowColumn>
        <FloatingActionButton 
          mini={true} 
          onTouchTap={onDecrement}
          backgroundColor="#f9a825" //--md-yellow-800
        >
          <Remove />
        </FloatingActionButton>
      </TableRowColumn>
      <TableRowColumn>
        <FloatingActionButton 
          mini={true} 
          className={cx('increment')}
          onTouchTap={onDestroy}
          backgroundColor="#c62828" //--md-red-800
        >
          <Clear />
        </FloatingActionButton>
      </TableRowColumn>
    </TableRow>
  );
};

TopicItem.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  incrementCount: PropTypes.func.isRequired,
  decrementCount: PropTypes.func.isRequired,
  destroyTopic: PropTypes.func.isRequired
};

export default TopicItem;
