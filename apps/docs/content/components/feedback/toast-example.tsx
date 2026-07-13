'use client';

import { useState } from 'react';

import { Button, Toast } from 'extraction-ui';

export const ToastExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <Toast.Provider>
      <Button onClick={() => setOpen(true)}>Trigger</Button>
      <Toast open={open} onOpenChange={setOpen}>
        <Toast.Indicator />
        <Toast.Content>
          <Toast.Title>{`The quick brown fox`}</Toast.Title>
          <Toast.Description>
            {`Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do.`}
          </Toast.Description>
          <Toast.Action className="mbs-3" altText="action">
            <Button className="w-full">Confirm</Button>
          </Toast.Action>
        </Toast.Content>
        <Toast.Close aria-label="Close" />
      </Toast>
      <Toast.Viewport />
    </Toast.Provider>
  );
};

export const ToastPlacementExample = ({ placement }) => {
  const [open, setOpen] = useState(false);

  return (
    <Toast.Provider placement={placement}>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Trigger ({placement})
      </Button>

      <Toast open={open} onOpenChange={setOpen} duration={2000}>
        <Toast.Indicator />
        <Toast.Content>
          <Toast.Title>{`The quick brown fox`}</Toast.Title>
          <Toast.Description>
            {`Alice was beginning to get very tired.`}
          </Toast.Description>
        </Toast.Content>
        <Toast.Close aria-label="Close" />
      </Toast>
      <Toast.Viewport />
    </Toast.Provider>
  );
};

export const ToastSizeExample = ({ size }) => {
  const [open, setOpen] = useState(false);

  return (
    <Toast.Provider>
      <Button onClick={() => setOpen(true)}>Trigger ({size})</Button>
      <Toast
        className={`toast-${size}`}
        open={open}
        onOpenChange={setOpen}
        duration={2000}
      >
        <Toast.Indicator />
        <Toast.Content>
          <Toast.Title>{`The quick brown fox`}</Toast.Title>
          <Toast.Description>
            {`Alice was beginning to get very tired.`}
          </Toast.Description>
        </Toast.Content>
        <Toast.Close className={`close-button-${size}`} aria-label="Close" />
      </Toast>
      <Toast.Viewport />
    </Toast.Provider>
  );
};

export const ToastVariantExample = ({ color, variant }) => {
  const [open, setOpen] = useState(false);

  return (
    <Toast.Provider>
      <Button
        className={`palette-${color} variant-${variant}`}
        onClick={() => setOpen(true)}
      >
        Trigger
      </Button>
      <Toast
        className={`palette-${color} variant-${variant}`}
        open={open}
        onOpenChange={setOpen}
        duration={999999999}
      >
        <Toast.Indicator />
        <Toast.Content>
          <Toast.Title>
            {`The quick brown fox`}
            <Toast.Close aria-label="Close" />
          </Toast.Title>
          <Toast.Description>
            {`Alice was beginning to get very tired.`}
          </Toast.Description>
        </Toast.Content>
      </Toast>
      <Toast.Viewport />
    </Toast.Provider>
  );
};

export const ToastWithAccentExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <Toast.Provider>
      <Button onClick={() => setOpen(true)}>Trigger</Button>
      <Toast
        className="accent-border-start border-l-primary"
        open={open}
        onOpenChange={setOpen}
      >
        <Toast.Indicator />
        <Toast.Content>
          <Toast.Title>{`The quick brown fox`}</Toast.Title>
          <Toast.Description>
            {`Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do.`}
          </Toast.Description>
          <Toast.Action className="mbs-3" altText="action">
            <Button className="w-full">Confirm</Button>
          </Toast.Action>
        </Toast.Content>
        <Toast.Close aria-label="Close" />
      </Toast>
      <Toast.Viewport />
    </Toast.Provider>
  );
};
