'use client';

import * as React from 'react';
import { X, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [resultMessage, setResultMessage] = React.useState("");

  // Reset state when opened
  React.useEffect(() => {
    if (isOpen) {
      setStatus("idle");
      setResultMessage("");
    }
  }, [isOpen]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "f5bd057a-48ba-4838-987b-d42b8f15ef41");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setResultMessage("Message sent successfully! I'll get back to you soon.");
        form.reset();
      } else {
        setStatus("error");
        setResultMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setResultMessage("Network error. Please try again later.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-lg bg-surface border border-border rounded-3xl p-6 sm:p-10 shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-text-secondary hover:text-accent transition-colors rounded-full hover:bg-bg"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <h2 className="font-display text-3xl font-bold tracking-tight mb-2">Let&apos;s Talk</h2>
        <p className="text-text-secondary mb-8">Fill out the form below and I&apos;ll get back to you as soon as possible.</p>

        {status === 'success' ? (
          <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-2">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-xl font-bold">Message Sent!</h3>
            <p className="text-text-secondary">{resultMessage}</p>
            <button 
              onClick={onClose}
              className="mt-4 px-6 py-2 bg-bg border border-border rounded-full hover:border-accent hover:text-accent transition-colors font-medium"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-sm font-medium text-text-secondary px-1">Name</label>
              <input 
                type="text" 
                id="name"
                name="name" 
                required
                className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-sm font-medium text-text-secondary px-1">Email</label>
              <input 
                type="email" 
                id="email"
                name="email" 
                required
                className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-sm font-medium text-text-secondary px-1">Message</label>
              <textarea 
                id="message"
                name="message" 
                required
                rows={4}
                className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-y min-h-[100px]"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-500 text-sm p-3 bg-red-500/10 rounded-lg">
                <AlertCircle size={16} />
                <span>{resultMessage}</span>
              </div>
            )}

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full flex items-center justify-center gap-2 bg-text-primary text-bg px-8 py-4 rounded-xl font-display font-bold text-lg uppercase tracking-widest hover:bg-accent hover:text-white transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-2"
            >
              {status === 'loading' ? (
                <Loader2 size={20} className="animate-spin" />
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
