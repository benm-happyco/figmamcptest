/**
 * Property API Service
 * Handles all API calls to the HappyCo GraphQL endpoint
 * 
 * IMPORTANT: You need to set your API token!
 * Option 1: Set VITE_HAPPYCO_API_TOKEN in a .env file
 * Option 2: Pass token directly to the functions
 */

const BASE_URL = 'https://manage.staging.happyco.com/graph';

// Get API token from environment variable or use provided token
function getAuthToken(providedToken = null) {
  return providedToken || import.meta.env.VITE_HAPPYCO_API_TOKEN || null;
}

/**
 * Makes a GraphQL query/mutation request
 * @param {string} query - The GraphQL query or mutation string
 * @param {Object} variables - Variables for the query/mutation
 * @param {string} token - Bearer token for authentication
 * @returns {Promise<Object>} The response data
 */
export async function graphqlRequest(query, variables = {}, token = null) {
  const authToken = getAuthToken(token);
  
  if (!authToken) {
    throw new Error('API token is required. Set VITE_HAPPYCO_API_TOKEN in .env or pass token parameter.');
  }

  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify({
        query,
        variables
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.errors) {
      throw new Error(JSON.stringify(data.errors));
    }

    return data.data;
  } catch (error) {
    console.error('GraphQL request failed:', error);
    throw error;
  }
}

/**
 * Fetches customer properties from HappyCo
 * @param {string} customerId - The ID of the customer (optional, defaults to HappyCo's staging customer)
 * @param {string} token - Optional Bearer token (will use env var if not provided)
 * @returns {Promise<Array>} Array of properties
 */
export async function getProperties(customerId = null, token = null) {
  const query = `
    query CustomerProperties($customerId: ID) {
      customer(customerId: $customerId) {
        id
        name
        propertiesV2 {
          count
          edges {
            cursor
            node {
              id
              name
              createdAt
              address {
                line1
                city
                state
                postalCode
              }
            }
          }
        }
      }
    }
  `;

  const variables = customerId ? { customerId } : {};
  const data = await graphqlRequest(query, variables, token);
  
  // Extract properties from the GraphQL response structure
  if (data && data.customer && data.customer.propertiesV2) {
    return data.customer.propertiesV2.edges.map(edge => ({
      id: edge.node.id,
      name: edge.node.name,
      createdAt: edge.node.createdAt,
      address: edge.node.address.line1,
      city: edge.node.address.city,
      state: edge.node.address.state,
      zip: edge.node.address.postalCode
    }));
  }
  
  return [];
}

/**
 * Fetches a single customer with property count
 * @param {string} customerId - The ID of the customer
 * @param {string} token - Optional Bearer token (will use env var if not provided)
 * @returns {Promise<Object>} Customer data with properties
 */
export async function getCustomer(customerId, token = null) {
  const query = `
    query CustomerProperties($customerId: ID) {
      customer(customerId: $customerId) {
        id
        name
        propertiesV2 {
          count
          edges {
            cursor
            node {
              id
              name
              createdAt
              address {
                line1
                city
                state
                postalCode
              }
            }
          }
        }
      }
    }
  `;

  return graphqlRequest(query, { customerId }, token);
}

