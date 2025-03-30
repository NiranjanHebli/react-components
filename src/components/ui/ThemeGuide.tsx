import { Button } from './Button';
import { Card } from './Card';
import { Badge } from './Badge';
import { Alert } from './Alert';
import { Input } from './Input';
import { Check, AlertCircle, Bell, Mail, Search } from 'lucide-react';

export function ThemeGuide() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Component Library Theme Guide</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Buttons</h2>
        <Card className="mb-4" variant="outline">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium mb-4">Variants</h3>
              <div className="flex flex-wrap gap-2">
                <Button label="Primary Button" variant="primary" />
                <Button label="Secondary Button" variant="secondary" />
                <Button label="Outline Button" variant="outline" />
                <Button label="Ghost Button" variant="ghost" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Sizes</h3>
              <div className="flex flex-wrap gap-2 items-center">
                <Button label="Small" size="sm" />
                <Button label="Medium" size="md" />
                <Button label="Large" size="lg" />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium mb-4">States</h3>
            <div className="flex flex-wrap gap-2">
              <Button label="Default" />
              <Button label="With Icon" icon={<Check className="w-4 h-4" />} />
              <Button label="Icon Right" icon={<Check className="w-4 h-4" />} iconPosition="right" />
              <Button label="Loading" isLoading />
              <Button label="Disabled" disabled />
              <Button label="Full Width" fullWidth className="mt-2" />
            </div>
          </div>
        </Card>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Badges</h2>
        <Card className="mb-4" variant="outline">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium mb-4">Variants</h3>
              <div className="flex flex-wrap gap-2">
                <Badge content="Primary" variant="primary" />
                <Badge content="Secondary" variant="secondary" />
                <Badge content="Success" variant="success" />
                <Badge content="Error" variant="error" />
                <Badge content="Warning" variant="warning" />
                <Badge content="Info" variant="info" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Outline Variants</h3>
              <div className="flex flex-wrap gap-2">
                <Badge content="Primary" variant="primary" outline />
                <Badge content="Secondary" variant="secondary" outline />
                <Badge content="Success" variant="success" outline />
                <Badge content="Error" variant="error" outline />
                <Badge content="Warning" variant="warning" outline />
                <Badge content="Info" variant="info" outline />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium mb-4">Shapes & Sizes</h3>
            <div className="flex flex-wrap gap-2 items-center">
              <Badge content="Small" size="sm" />
              <Badge content="Medium" size="md" />
              <Badge content="Large" size="lg" />
              <Badge content="Pill" pill />
              <Badge content="Rounded" />
            </div>
          </div>
        </Card>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card title="Default Card" className="h-full">
            <p className="text-gray-600">A simple card with just a title and content.</p>
          </Card>
          
          <Card 
            title="Card with Actions" 
            headerAction={<Button label="Action" size="sm" variant="ghost" />}
            footer={<div className="flex justify-end"><Button label="Submit" size="sm" /></div>}
            className="h-full"
          >
            <p className="text-gray-600">A card with header actions and a footer.</p>
          </Card>
          
          <Card title="Primary Theme" variant="primary" className="h-full">
            <p className="text-gray-700">A card with primary theme styling.</p>
          </Card>
          
          <Card title="Secondary Theme" variant="secondary" className="h-full">
            <p className="text-gray-700">A card with secondary theme styling.</p>
          </Card>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Alerts</h2>
        <div className="space-y-4">
          <Alert 
            title="Info Alert" 
            message="This is an informational alert to notify users about something that might be helpful."
            variant="info"
            icon={<AlertCircle className="w-5 h-5" />}
          />
          
          <Alert 
            title="Success Alert" 
            message="This is a success alert to confirm that an action has been completed successfully."
            variant="success"
            icon={<Check className="w-5 h-5" />}
          />
          
          <Alert 
            title="Warning Alert" 
            message="This is a warning alert to notify users about something that requires attention."
            variant="warning"
            icon={<Bell className="w-5 h-5" />}
          />
          
          <Alert 
            title="Error Alert" 
            message="This is an error alert to notify users about something that went wrong."
            variant="error"
            icon={<AlertCircle className="w-5 h-5" />}
            onClose={() => console.log('Alert closed')}
          />
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Inputs</h2>
        <Card className="mb-4" variant="outline">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Default Input"
              placeholder="Enter text..."
              hint="This is a hint text to help users"
            />
            
            <Input
              label="With Icon"
              placeholder="Search..."
              leftIcon={<Search className="w-4 h-4" />}
            />
            
            <Input
              label="Filled Variant"
              placeholder="Enter email..."
              variant="filled"
              rightIcon={<Mail className="w-4 h-4" />}
            />
            
            <Input
              label="Outlined Variant"
              placeholder="Enter password..."
              variant="outlined"
              type="password"
            />
            
            <Input
              label="Underlined Variant"
              placeholder="Enter username..."
              variant="underlined"
            />
            
            <Input
              label="With Error"
              placeholder="Enter text..."
              error="This field is required"
              value=""
            />
            
            <Input
              label="Required Field"
              placeholder="Enter required text..."
              required
            />
            
            <Input
              label="Disabled Input"
              placeholder="Cannot edit this field"
              disabled
              value="Disabled value"
            />
          </div>
        </Card>
      </section>
    </div>
  );
} 