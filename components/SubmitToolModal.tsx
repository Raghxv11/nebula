"use client"

import React, { useState } from "react"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface SubmitToolModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SubmitToolModal({ isOpen, onClose }: SubmitToolModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [submitState, setSubmitState] = useState<{
    isLoading: boolean;
    isSuccess: boolean;
    error: string | null;
  }>({
    isLoading: false,
    isSuccess: false,
    error: null
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset submit state
    setSubmitState({ isLoading: true, isSuccess: false, error: null })

    try {
      const response = await fetch('/api/submit-tool', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitState({ isLoading: false, isSuccess: true, error: null })
        // Reset form data
        setFormData({
          name: "",
          email: "",
          message: ""
        })
        // Close modal after success
        setTimeout(() => {
          onClose()
          setSubmitState({ isLoading: false, isSuccess: false, error: null })
        }, 2000)
      } else {
        setSubmitState({ 
          isLoading: false, 
          isSuccess: false, 
          error: result.error || 'Something went wrong' 
        })
      }
    } catch (error) {
      setSubmitState({ 
        isLoading: false, 
        isSuccess: false, 
        error: 'Network error. Please try again.' 
      })
    }
  }

  const handleClose = () => {
    if (!submitState.isLoading) {
      onClose()
      // Reset form and state when closing
      setFormData({ name: "", email: "", message: "" })
      setSubmitState({ isLoading: false, isSuccess: false, error: null })
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-2xl font-bold bg-linear-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            Submit Your Tool
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Share an AI tool with our community. We'll review your submission and add it to our platform if it meets our quality standards.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Your full name"
              className="transition-all duration-200 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
              required
              disabled={submitState.isLoading}
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              placeholder="your.email@example.com"
              className="transition-all duration-200 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
              required
              disabled={submitState.isLoading}
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">
              Tool Description <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              placeholder="Tell us about the tool you'd like to submit. Include the tool name, what it does, key features, and why it would be valuable for our community..."
              className="transition-all duration-200 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 resize-none"
              required
              disabled={submitState.isLoading}
            />
          </div>

          {/* Success Message */}
          {submitState.isSuccess && (
            <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-green-800">Success!</p>
                <p className="text-green-600">Tool submitted successfully! We'll review it and get back to you.</p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {submitState.error && (
            <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-red-800">Error</p>
                <p className="text-red-600">{submitState.error}</p>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={submitState.isLoading}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              disabled={submitState.isLoading}
              className="flex-1 bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              {submitState.isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Tool"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}