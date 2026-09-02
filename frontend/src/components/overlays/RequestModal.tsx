import { useEffect, useState, type FormEvent } from 'react';
import { LogoMark, XIcon } from '../icons/Icons';
import { PillButton } from '../ui/PillButton';
import { useApp } from '../../context/AppContext';
import { submitRequest } from '../../lib/api';

export function RequestModal() {
  const { modalOpen, closeModal, modalInitialProject } = useApp();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', project: '' });

  useEffect(() => {
    if (modalOpen && modalInitialProject) {
      setFormData((prev) => ({ ...prev, project: modalInitialProject }));
    }
  }, [modalOpen, modalInitialProject]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && modalOpen) {
        closeModal();
      }
    }
    if (modalOpen) {
      document.addEventListener('keydown', onKeyDown);
    }
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [modalOpen, closeModal]);

  useEffect(() => {
    if (!modalOpen) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
        setIsSubmitting(false);
        setFormData({ name: '', email: '', project: '' });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [modalOpen]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitRequest(formData);
    } catch {
      // Stub fallback if backend is offline
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  }

  return (
    <div
      className={`modal-backdrop ${modalOpen ? 'open' : ''}`}
      id="modalBackdrop"
      role="dialog"
      aria-modal="true"
      onClick={closeModal}
    >
      <div
        className="modal-panel"
        id="modalPanel"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close"
          id="modalCloseBtn"
          aria-label="Close"
          onClick={closeModal}
        >
          <XIcon size="0.875rem" />
        </button>

        {!isSuccess ? (
          <div id="modalFormState">
            <div className="modal-heading">
              <div className="modal-heading__eyebrow">
                <span className="modal-heading__dot" /> Start a project
              </div>
              <h2>Tell us what you're building.</h2>
            </div>

            <form className="modal-form" id="requestForm" onSubmit={handleSubmit}>
              <label>
                <span className="label-text">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </label>

              <label>
                <span className="label-text">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </label>

              <label>
                <span className="label-text">Project</span>
                <textarea
                  name="project"
                  rows={4}
                  required
                  placeholder="A few words about your project, timeline, and budget."
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                />
              </label>

              <div className="modal-bottom">
                <span className="modal-note">We reply within one business day.</span>
                <PillButton
                  label={isSubmitting ? 'Sending…' : 'Send request'}
                  variant="dark"
                  withArrow
                  arrowDir="up-right"
                  type="submit"
                />
              </div>
            </form>
          </div>
        ) : (
          <div id="modalSuccessState" className="modal-success">
            <div className="modal-success__badge">
              <LogoMark size="1.5rem" />
            </div>
            <h2>Request received</h2>
            <p>Thanks for reaching out — we'll get back to you within one business day.</p>
            <PillButton
              label="Close"
              variant="dark"
              onClick={closeModal}
              id="modalSuccessClose"
            />
          </div>
        )}
      </div>
    </div>
  );
}
