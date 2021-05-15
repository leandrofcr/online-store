import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from '../components/Category';
import { getProductsFromCategory } from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      category: [],
    };

    this.onChangeCategory = this.onChangeCategory.bind(this);
  }

  async onChangeCategory({ target: { value } }) {
    console.log(value);
    const category = await getProductsFromCategory(value);
    this.setState({ category });
  }

  render() {
    const { categories } = this.props;
    return (
      <div onChange={ this.onChangeCategory }>
        {categories.map((category) => (
          <Category
            key={ category.name }
            category={ category }
          />
        ))}
      </div>
    );
  }
}

Home.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
