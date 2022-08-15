# Emacs hanging when opening a Typescript file

This seems to be due to Flycheck + the ESLint config. Flycheck runs something similar to `eslint --print-config` when loading a Typescript file. This is a blocking function, and can take up to a couple seconds.

By disabling the initial flycheck on load, it stops this blocking behaviour.

```lisp
;; fix flycheck init load times due to flycheck-perform-deferred-syntax-check
;; this in turn runs `eslint --print-config` which can be slow
(with-eval-after-load 'flycheck
  (advice-add 'flycheck-eslint-config-exists-p :override (lambda() t)))
```

[[emacs]]