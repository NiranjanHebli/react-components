import React from 'react';
import { Card } from './components/Card';
import { Alert } from './components/Alert';
import { Badge } from './components/Badge';
import { Button } from './components/Button';
import { Profile } from './components/Profile';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold mb-8">React Components</h1>
        
        <Card title="Welcome Card" />
        
        <Alert message="This is an important notification!" />
        
        <div className="flex items-center space-x-2">
          <span className="text-gray-700">Notifications:</span>
          <Badge count={5} />
        </div>
        
        <Button label="Click Me" />
        
        <Profile name="John Doe" />
      </div>
    </div>
  );
}

export default App;