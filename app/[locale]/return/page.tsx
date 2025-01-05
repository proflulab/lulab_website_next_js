'use client';

import React, { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';

export default function ReturnPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [customerEmail, setCustomerEmail] = useState('');

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get('session_id');

    if (!sessionId) {
      redirect('/');
      return;
    }

    fetch(`/api/stripe/checkout_sessions?session_id=${sessionId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      })
      .catch((error) => {
        console.error('Error fetching session:', error);
        redirect('/');
      });
  }, []);

  if (status === 'open') {
    redirect('/');
  }

  if (status === 'complete') {
    return (
      <section id="success" className="max-w-2xl mx-auto p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Payment Successful!</h2>
        <p className="mb-4">
          We appreciate your business! A confirmation email will be sent to {customerEmail}.
        </p>
        <p>
          If you have any questions, please email{' '}
          <a 
            href="mailto:orders@example.com" 
            className="text-blue-600 hover:text-blue-800"
          >
            orders@example.com
          </a>.
        </p>
      </section>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
    </div>
  );
}
