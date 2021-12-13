import axios from 'axios';

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

const axiosClient = axios.create({
  baseURL: isLocalhost
    ? 'http://176.36.181.130:9011/api'
    : 'http://176.36.181.130:9011/api',
});

export default axiosClient;
