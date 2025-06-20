import { Input, Tooltip } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { I18nKey } from "#/i18n/declaration";

interface APIKeyInputProps {
  isDisabled: boolean;
  isSet: boolean;
}

export function APIKeyInput({ isDisabled, isSet }: APIKeyInputProps) {
  const { t } = useTranslation();

  return (
    <fieldset data-testid="api-key-input" className="flex flex-col gap-2">
      <Tooltip content={isSet ? "API Key is set" : "API Key is not set"}>
        <label
          htmlFor="api-key"
          className="font-[500] text-neutral-400 text-xs flex items-center gap-1 self-start"
        >
          {isSet && <FaCheckCircle className="text-green-500 inline-block" />}
          {!isSet && (
            <FaExclamationCircle className="text-red-500 inline-block" />
          )}
          {t(I18nKey.API$KEY)}
        </label>
      </Tooltip>
      <Input
        isDisabled={isDisabled}
        id="api-key"
        name="api-key"
        aria-label={t(I18nKey.API$KEY)}
        type="password"
        defaultValue=""
        classNames={{
          inputWrapper: "bg-neutral-800 rounded-md text-sm px-3 py-[10px]",
        }}
      />
      <p className="text-sm text-neutral-400">
        {t(I18nKey.API$DONT_KNOW_KEY)}{" "}
        <a
          href="https://docs.all-hands.dev/usage/llms"
          rel="noreferrer noopener"
          target="_blank"
          className="underline underline-offset-2"
        >
          {t(I18nKey.COMMON$CLICK_FOR_INSTRUCTIONS)}
        </a>
      </p>
    </fieldset>
  );
}
