import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';
import { useState } from "react";

// Initialize EmailJS
emailjs.init("XdqQa2EHEymC9Qev8");

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      await emailjs.send(
        'service_f4ryypt',
        'template_abs1io5',
        {
          from_name: formData.get('name'),
          from_email: formData.get('email'),
          phone: formData.get('phone'),
          message: formData.get('message'),
          to_email: 'lhollins0@gmail.com'
        },
        'XdqQa2EHEymC9Qev8'
      );

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });

      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <Card className="max-w-xl mx-auto p-6 bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <Input name="name" placeholder="Your name" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input name="email" type="email" placeholder="Your email" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <Input name="phone" type="tel" placeholder="Your phone number" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <Textarea name="message" placeholder="Tell us about your project" className="h-32" required />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};