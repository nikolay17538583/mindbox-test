import '../styles/footer.css';
import { FooterProps } from '../types';

const Footer: React.FC<FooterProps> = ({
  itemsLeft,
  filter,
  changeFilter,
  clearCompleted,
}) => (
  <footer className="footer">
    <span>{itemsLeft} items left</span>
    <div className="filters">
      <span
        className={`filter ${filter === 'all' ? 'active' : ''}`}
        onClick={() => changeFilter('all')}
      >
        All
      </span>
      <span
        className={`filter ${filter === 'active' ? 'active' : ''}`}
        onClick={() => changeFilter('active')}
      >
        Active
      </span>
      <span
        className={`filter ${filter === 'completed' ? 'active' : ''}`}
        onClick={() => changeFilter('completed')}
      >
        Completed
      </span>
    </div>
    <button onClick={clearCompleted}>Clear completed</button>
  </footer>
);

export default Footer;
