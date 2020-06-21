import React, { useState, useRef } from 'react';

const Subscribe = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const inputEl = useRef(null);

  const subscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage(false);
    setErrorMessage(false);

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    setLoading(false);

    const { error } = await res.json();

    if (error) {
      setErrorMessage(error)
      return;
    }

    setSuccessMessage("You are now subscribed!")
    inputEl.current.value = '';
  };

  return (
    <form>
      <fieldset>
        <legend>Subscribe to my newsletter</legend>
        <p>Get emails from me about web dev, tech, M&A, travel, and more!</p>

        {loading && <p>Submitting...</p>}

        {successMessage && <p>{successMessage}</p>}

        {errorMessage && <p>{errorMessage}</p>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="you@hey.com (Required)"
          ref={inputEl}
        />

        <input type="submit" value="Subscribe" onClick={subscribe} />
      </fieldset>
    </form>
  );
};

export default Subscribe;
