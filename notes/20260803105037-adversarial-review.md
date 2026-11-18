# Adversarial review

Adversarial reviews are asking an AI agent in a separate context window to perform a review, usually a [[20260625012244-code-review]]. The idea is to have something separate to the author to critically look at changes and see if they create bugs, do not work, or do not fulfil the original intent. By having something separate, you eliminate bias.

Depending on the magnitude and importance of the change, you can perform multiple adversarial reviews, with different models.

Of course you can also do this with with non-code reviews, such as plan review, debug findings, etc.

[[ai]]