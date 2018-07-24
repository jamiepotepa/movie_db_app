import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
    addGenreFilter,
    removeGenreFilter,
    adjustRating
} from '../actions/filtersActions';

import { inArrayOrNot } from '../utils/helpers';

class MovieFilters extends Component {
    constructor() {
        super();
        this.onCheckboxChange = this.onCheckboxChange.bind(this);
        this.onRangeChange = this.onRangeChange.bind(this);
    }

    onCheckboxChange(e) {
        const genreValue = e.target.value;

        inArrayOrNot(this.props.genreFilters, parseInt(genreValue))
            ? this.props.removeGenreFilter(parseInt(genreValue))
            : this.props.addGenreFilter(parseInt(genreValue));
    }

    onRangeChange(e) {
        this.props.adjustRating(parseFloat(e.target.value));
    }

    render() {
        return (
            <div className="col-sm-4 col-md-3 col-lg-3 bg-light p-4">
                <button
                    className="btn btn-primary w-100 d-inline-block d-sm-none mb-3"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseExample"
                >
                    Toggle filters
                </button>
                <div id="collapseExample" className="collapse d-sm-block">
                    <form>
                        <p className="lead">Filter by Genre</p>
                        <div className="mb-2">
                            {this.props.genres.map(genre => {
                                return (
                                    <div key={genre.id}>
                                        <input
                                            type="checkbox"
                                            id={genre.id}
                                            name={genre.name}
                                            value={genre.id}
                                            onChange={this.onCheckboxChange}
                                            className="mr-2"
                                        />
                                        <label htmlFor={genre.id}>{genre.name}</label>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="border-top pt-2">
                            <p className="lead">Filter by Rating</p>
                            <input
                                type="range"
                                min="0"
                                max="10"
                                step="0.5"
                                value={this.props.rating}
                                onChange={this.onRangeChange}
                            />

                            <p>Range: {this.props.rating}</p>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

MovieFilters.propTypes = {
    genres: PropTypes.arrayOf(PropTypes.object).isRequired,
    genreFilters: PropTypes.arrayOf(PropTypes.number).isRequired,
    rating: PropTypes.number.isRequired,
    addGenreFilter: PropTypes.func.isRequired,
    removeGenreFilter: PropTypes.func.isRequired,
    adjustRating: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    genres: state.genres.genres,
    genreFilters: state.filters.genres,
    rating: state.filters.rating
});

export default connect(
    mapStateToProps,
    {
        addGenreFilter,
        removeGenreFilter,
        adjustRating
    }
)(MovieFilters);
