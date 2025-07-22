import { useState, useMemo, useCallback } from 'react';
import { debounce as lodashDebounce } from 'lodash';

const useProductsFilter = (products, categories) => {
  const [filters, setFilters] = useState({
    category: 'all',
    type: 'all',
    priceRange: [0, 100000],
    searchTerm: ''
  });

  const [uiState, setUiState] = useState({
    showFilters: false,
    isLoading: false,
    showAlert: false,
    alertMessage: ''
  });

  const [wishlist, setWishlist] = useState([]);

  const priceRangeOptions = useMemo(() => ({
    min: Math.min(...products.map(p => p.price)),
    max: Math.max(...products.map(p => p.price))
  }), [products]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = filters.category === 'all' || product.category === filters.category;
      const matchesType = filters.type === 'all' || product.type === filters.type;
      const matchesSearch = filters.searchTerm === '' ||
        product.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(filters.searchTerm.toLowerCase());
      const matchesPrice = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];

      return matchesCategory && matchesType && matchesSearch && matchesPrice;
    });
  }, [filters, products]);

  const availableTypes = useMemo(() => {
    if (filters.category === 'all') return [];
    return Object.entries(categories[filters.category].types).map(([key, value]) => ({
      id: key,
      name: value
    }));
  }, [filters.category]);

  const debounceSearch = useCallback(
    lodashDebounce((term) => {
      setFilters(prev => ({ ...prev, searchTerm: term }));
      setUiState(prev => ({ ...prev, isLoading: false }));
    }, 500),
    []
  );

  const updateFilter = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value,
      ...(filterName === 'category' ? { type: 'all' } : {})
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: 'all',
      type: 'all',
      priceRange: [priceRangeOptions.min, priceRangeOptions.max],
      searchTerm: ''
    });
    showAlert('All filters cleared');
  };

  const showAlert = (message) => {
    setUiState(prev => ({ ...prev, showAlert: true, alertMessage: message }));
    setTimeout(() => setUiState(prev => ({ ...prev, showAlert: false })), 3000);
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
    showAlert(prev.includes(productId) ? 'Product removed from wishlist' : 'Product added to wishlist');
  };

  return {
    filters, setFilters, updateFilter, clearFilters,
    uiState, setUiState, showAlert, debounceSearch,
    wishlist, toggleWishlist,
    filteredProducts, availableTypes, priceRangeOptions
  };
};

export default useProductsFilter;
