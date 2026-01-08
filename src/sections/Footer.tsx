import { useState } from 'react';

const Footer = () => {
  const [connectedAccounts, setConnectedAccounts] = useState(['Shopify', 'GA4']);

  const accounts = [
    { name: 'Shopify', status: 'Connected' },
    { name: 'GA4', status: 'Connect' },
    { name: 'Amazon', status: 'Connect' },
    { name: 'Google Ads', status: 'Connect' },
    { name: 'Meta', status: 'Connect' },
  ];

  const toggleConnection = (accountName: string) => {
    if (connectedAccounts.includes(accountName)) {
      setConnectedAccounts(connectedAccounts.filter(name => name !== accountName));
    } else {
      setConnectedAccounts([...connectedAccounts, accountName]);
    }
  };

  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="w-full px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Accounts */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Manages all your accounts
            </h3>

            <div className="space-y-3">
              {accounts.map((account) => {
                const isConnected = connectedAccounts.includes(account.name);
                return (
                  <div
                    key={account.name}
                    className="flex items-center justify-between p-3 rounded-lg border border-gray-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-md flex items-center justify-center ${isConnected ? 'bg-green-500' : 'bg-gray-300'
                        }`}>
                        <span className="text-white font-bold text-sm">
                          {account.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{account.name}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleConnection(account.name)}
                      className={`px-3 py-1 rounded text-sm ${isConnected
                        ? 'bg-green-100 text-green-700'
                        : 'bg-blue-600 text-white'
                        }`}
                    >
                      {isConnected ? 'Connected' : 'Connect'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>


          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Creatives optimization
            </h3>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <p className="text-gray-600">24/7 ROAS improvements</p>
              </div>

              <div className="space-y-4">
                <div className="p-4 border border-gray-300 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">ROAS</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-900">3.1x</span>
                  </div>
                </div>

                <div className="p-4 border border-gray-300 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">CPA</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-900">$23.4</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-lime-600 text-white rounded-lg">
              <p className="text-sm text-gray-300 mb-1">Next Gen of Marketing</p>
              <h4 className="text-xl font-bold mb-2">
                Let AI Run Your Ads
              </h4>
              <a
                href="mailto:work@email.com"
                className="text-blue-300 hover:text-blue-200 text-sm"
              >
                work@email.com
              </a>
            </div>
          </div>

          {/* Right Column - Contact */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Stay updated
            </h3>

            <div className="mb-6">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-3"
              />
              <button
                type="button"
                className="w-full bg-blue-600 text-white py-3 rounded-lg"
              >
                Subscribe
              </button>
            </div>

            <div className="text-sm text-gray-600">
              <div className="mb-4">
                <p className="font-medium text-gray-900 mb-2">Contact</p>
                <p>work@email.com</p>
              </div>

              <div className="pt-4 border-t border-gray-300">
                <p className="mb-2">© {new Date().getFullYear()} Ryze AI</p>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-600 hover:text-gray-900">Privacy</a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">Terms</a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">Cookies</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;