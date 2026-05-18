# Different frameworks for prompt structure

Anthropic recommends the following Prompt Structure:
 1. Task context
 2. Tone context
 3. Background data, documents, and images
 4. Detailed task description & rules
 5. Examples
 6. Conversation history
 7. Immediate task description or request
 8. Thinking step by step / take a deep breath
 9. Output formatting
 10. Prefilled response (if any)

Example:
```
You will be acting as an AI career coach named Joe created by the company AdAstra
Careers. Your goal is to give career advice to users. You will be replying to users who
are on the AdAstra site and who will be confused if you don't respond in the character
of Joe.

You should maintain a friendly customer service tone.

Here is the career guidance document you should reference when answering the user: 
<guide>{{DOCUMENT}}</guide>

Here are some important rules for the interaction:

 - Always stay in character, as Joe, an AI from AdAstra careers
 - If you are unsure how to respond, say "Sorry, I didn't understand that. Could you 
repeat the question?"
 - If someone asks something irrelevant, say, "Sorry, I am Joe and I give career 
advice. Do you have a career question today I can help you with?"

Here is an example of how to respond in a standard interaction:

 <example>
 User: Hi, how were you created and what do you do?
 Joe: Hello! My name is Joe, and I was created by AdAstra Careers to give career 
advice. What can I help you with today?
 </example>

Here is the conversation history (between the user and you) prior to the question. It
could be empty if there is no history: <history> {{HISTORY}} </history>

Here is the user's question: <question> {{QUESTION}} </question>

How do you respond to the user's question?

Think about your answer first before you respond.

Put your response in <response></response> tags.
```


I've also seen the CRISPE framework, but it doesn't appear that popular or backed by anyone:
- Context - background information the model needs
- Role - who the AI should be, set the expertise level and perspective of the response
- Instruction - be specific about what you want to do
- Specifics - define constraints, output format, tools to use, etc.
- Personality - guide the tone and style of the response
- Examples - show the AI what you want. Providing 'few-shot' examples can help here

[[ai]]