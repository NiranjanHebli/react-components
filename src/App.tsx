import React from 'react';
import { Card } from './components/ui/Card';
import { Alert } from './components/ui/Alert';
import { Badge } from './components/ui/Badge';
import { Button } from './components/ui/Button';
import { Profile } from './components/ui/Profile';
import { NotificationBanner } from './components/ui/NotificationBanner';
import { UserAvatar } from './components/ui/UserAvatar';
import { FeatureCard } from './components/ui/FeatureCard';

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

        <NotificationBanner 
            message="Your profile has been updated successfully" 
            type="success" 
            onClose={() => console.log('closed')} 
          />
          
          <UserAvatar 
            name="John Doe" 
            role="Senior Designer" 
            imageUrl="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" 
          />
          
          <FeatureCard 
            title="Cloud Storage" 
            description="Access your files from anywhere in the world with our secure cloud storage solution." 
            linkText="Learn more" 
          />
      </div>
    </div>
  );
}

export default App;