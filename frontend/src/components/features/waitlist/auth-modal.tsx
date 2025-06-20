import React from "react";
import { useTranslation } from "react-i18next";
import { I18nKey } from "#/i18n/declaration";
import MojoCodeLogo from "#/assets/branding/mojo-code-logo.svg?react";
import { ModalBackdrop } from "#/components/shared/modals/modal-backdrop";
import { ModalBody } from "#/components/shared/modals/modal-body";
import { BrandButton } from "../settings/brand-button";
import GitHubLogo from "#/assets/branding/github-logo.svg?react";

interface AuthModalProps {
  githubAuthUrl: string | null;
}

export function AuthModal({ githubAuthUrl }: AuthModalProps) {
  const { t } = useTranslation();

  const handleGitHubAuth = () => {
    if (githubAuthUrl) {
      // Always start the OIDC flow, let the backend handle TOS check
      window.location.href = githubAuthUrl;
    }
  };

  return (
    <ModalBackdrop>
      <ModalBody className="border border-tertiary">
        <MojoCodeLogo width={136} height={40} />
        <div className="flex flex-col gap-2 w-full items-center text-center">
          <h1 className="text-2xl font-bold">
            {t(I18nKey.AUTH$SIGN_IN_WITH_IDENTITY_PROVIDER)}
          </h1>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <BrandButton
            type="button"
            variant="primary"
            onClick={handleGitHubAuth}
            className="w-full"
            startContent={<GitHubLogo width={20} height={20} />}
          >
            {t(I18nKey.GITHUB$CONNECT_TO_GITHUB)}
          </BrandButton>
        </div>
      </ModalBody>
    </ModalBackdrop>
  );
}
