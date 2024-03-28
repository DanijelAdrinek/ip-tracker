/**
 * Class for handlind all IP address related tasks
 * 
 * @param {string} apiKey - API key used for accessing geo.ipify.org
 * 
 */
class IPDataManager {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    /**
     * Checks to see if the ip address provided matches the format of an actual IP address
     * Can be either IPv4 or IPv6
     * 
     * @param {string} ip - IP address
     * @returns {boolean}
     */
    _isValidIPAddress(ip) {
        const ipv4Pattern = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
        const ipv6Pattern = /^([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4})$/;

        return ipv4Pattern.test(ip) || ipv6Pattern.test(ip);
    }

    /**
     * Shows user that he made an error while writing the IP address
     * 
     * @param {HTMLInputElement} inputElementPatent - Parent of the input element we wrote the IP address in
     */
    _showErrorWithIP(inputElementParent) {
        inputElementParent.classList.add('ip-error', 'animate');
        alert("The IP Address you wrote is in an incorrect format!");
    }


    async fetchInfo(inputElement) {
        const ipAddress = inputElement.value;
        const inputElementParent = inputElement.parentNode;

        // check if IP address entered is valid and exit function if its not
        if(this._isValidIPAddress(ipAddress)) {
            inputElementParent.classList.remove('ip-error');
        } else {
            this._showErrorWithIP(inputElementParent); 
            return null;
        }

        const url = `https://geo.ipify.org/api/v1?apiKey=${this.apiKey}&ipAddress=${ipAddress}`;

        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                return {
                    ip: ipAddress,
                    location: `${data.location.city}, ${data.location.country}`,
                    coordinates: {
                        latitude: data.location.lat,
                        longitude: data.location.lng
                    },
                    timezone: `UTC ${data.location.timezone}`,
                    isp: data.isp
                };
            } else {
                throw new Error('Failed to fetch IP information');
            }
        } catch (error) {
            console.error('Error fetching IP information:', error);
            return null;
        }
    }
}

export { IPDataManager };