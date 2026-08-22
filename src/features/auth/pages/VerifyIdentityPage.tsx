import { useState } from "react";

import PanelCard from "@/shared/ui/Cards/Panel";
import { Button, FileUpload, Icon } from "@/shared/ui";
import { StepFooter } from "@/features/scholarship/components";
import useProfileVerification from "../hooks/useProfileVerification";
import { useNavigate } from "react-router-dom";
import { useProfileCompletionContext } from "../context/ProfileCompletionContext";

function VerifyIdentityPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const {
    uploadVerificationDocument,
    isUploading,
    uploadSuccess,
    resetUploadState,
  } = useProfileVerification();

  const navigate = useNavigate();
  const { fetchProfileCompletionStatus } = useProfileCompletionContext();

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file);
    // Selecting/removing a new file means
    // we're starting a new verification attempt.
    resetUploadState();
  };

  const handleVerify = async () => {
    if (!selectedFile || isUploading) return;

    const payload = {
      filename: selectedFile.name,
      fileSize: selectedFile.size,
      contentType: selectedFile.type,
    };

    try {
      await uploadVerificationDocument(payload, selectedFile);
    } catch (error) {
      console.error("Identity verification failed:", error);
    }
  };

  const handleContinueToDashboard = async () => {
    await fetchProfileCompletionStatus();
    navigate("/dashboard");
  };

  return (
    <section className="flex items-center justify-center p-8">
      <PanelCard widthClass="w-130">
        <div className="space-y-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-light-yellow">
              <Icon
                name="material-symbols:verified-user-outline"
                size={32}
                className="text-on-yellow"
              />
            </div>

            <h1 className="application-card-heading">Verify Your Identity</h1>

            <p className="body text-center text-body-muted">
              To protect our funding partners and prevent fraud, we need a quick
              identity check. This unlocks your ability to apply for all
              scholarships.
            </p>

            <div className="py-2">
              <div className="flex items-center justify-center gap-1 rounded-sm border-2 border-action-blue bg-pale-blue px-2 py-1 text-action-blue">
                <Icon name="material-symbols:lock-outline" size={20} />
                <p>Your documents are strictly used for verification.</p>
              </div>
            </div>
          </div>

          <FileUpload
            label="Select Current College ID"
            supportedFormats="Supported formats: PDF, JPG, PNG. Max: 5MB."
            maxSizeInMB={5}
            onFileChange={handleFileChange}
            accept={{
              "application/pdf": [".pdf"],
            }}
            uploadSuccess={uploadSuccess}
          />

          <StepFooter
            step="Step 4 of 4"
            borderPadding="py-4"
            action={
              <Button
                fullWidth={false}
                disabled={!uploadSuccess && (!selectedFile || isUploading)}
                onClick={
                  uploadSuccess ? handleContinueToDashboard : handleVerify
                }
              >
                {uploadSuccess
                  ? "Continue to Dashboard"
                  : isUploading
                    ? "Uploading..."
                    : "Upload & Verify"}
              </Button>
            }
          />

          <div className="flex items-center justify-center">
            <p className="disclaimer-text text-body-muted">
              Don’t Have College ID?
              <span className="cursor-pointer text-action-blue">
                Need Assistance
              </span>
            </p>
          </div>
        </div>
      </PanelCard>
    </section>
  );
}

export default VerifyIdentityPage;
