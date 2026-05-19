# Qubis Setup & Installation Guide

This guide will walk you through the step-by-step process of running **Qubis** locally on your machine. Since Qubis is a full-stack, real-time reactive application, it requires configuring the **Convex** backend and **Clerk** authentication.

---

## 📋 Prerequisites

Ensure you have the following installed on your machine:
*   **Node.js** (v18.x or v20.x+ recommended)
*   **npm** (comes with Node) or **pnpm** / **yarn**
*   A free account on [Clerk](https://clerk.com/)
*   A free account on [Convex](https://www.convex.dev/)

---

## 🚀 Step-by-Step Setup

### Step 1: Install Dependencies
Open your terminal in the root of the project (`d:\ABAN\qubis`) and install the npm packages:

```bash
npm install
```

---

### Step 2: Set Up Convex Backend

Convex acts as your live database and backend API.

1.  **Initialize Convex**: Run the initialization command in your terminal:
    ```bash
    npx convex dev
    ```
2.  **Authenticate**: This will open a browser window asking you to log into Convex (or sign up if you haven't).
3.  **Create Project**: Once authenticated, the CLI will ask in the terminal:
    *   *Would you like to create a new project?* Choose **yes**.
    *   *What would you like to name it?* Press Enter to accept `qubis` (or type a name).
4.  **Automatic Variables**: Once finished, Convex will compile your schema and backend functions. It will also **automatically create or update the `.env.local` file** in the project root with the following variables:
    *   `CONVEX_DEPLOYMENT`
    *   `NEXT_PUBLIC_CONVEX_URL`

*Note: Keep this terminal window running in the background. It watches your `/convex` folder and deploys any changes instantly.*

---

### Step 3: Set Up Clerk Authentication

Clerk manages secure user accounts and sign-ins.

1.  **Create a Clerk App**:
    *   Go to the [Clerk Dashboard](https://dashboard.clerk.com/) and click **Add Application**.
    *   Name your application **Qubis**.
    *   Select **Email** and **Google** (or other providers) as sign-in options.
    *   Click **Create Application**.
2.  **Copy API Keys**:
    *   In the Clerk dashboard, navigate to **API Keys** on the left menu.
    *   Copy the **Publishable key** and **Secret key**.
    *   Open your local `d:\ABAN\qubis\.env.local` file and paste them:
        ```env
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
        CLERK_SECRET_KEY=sk_test_...
        ```

---

### Step 4: Configure Clerk JWT Template for Convex

To let Convex securely read who is logged into Clerk, we need to establish a secure JWT trust relationship.

1.  **Create JWT Template**:
    *   In your **Clerk Dashboard**, go to **JWT Templates** (under User & Authentication).
    *   Click **New Template** and select **Convex**.
    *   Leave all claims as default and click **Save**.
2.  **Get JWT Issuer Domain**:
    *   Click on your newly created **Convex JWT Template**.
    *   Locate the **Issuer** field at the bottom (looks like `https://clerk.your-app.accounts.dev` or custom domain).
    *   Copy this URL.
3.  **Add to Environment Files**:
    *   Open `d:\ABAN\qubis\.env.local` and add it:
        ```env
        CLERK_JWT_ISSUER_DOMAIN=https://your-clerk-app-domain.clerk.accounts.dev
        ```
4.  **Add to Convex Environment Variables** (*CRITICAL STEP*):
    *   Since Convex serverless functions execute on Convex servers (not locally in Next.js), they need access to this issuer domain.
    *   Go to your [Convex Dashboard](https://dashboard.convex.dev).
    *   Select your `qubis` project.
    *   Go to **Settings** -> **Environment Variables**.
    *   Click **Add Variable**.
    *   Set the **Name** to `CLERK_JWT_ISSUER_DOMAIN` and **Value** to your Issuer URL. Click **Save**.

---

### Step 5: Configure Secure User Sync Webhook

Whenever a user registers or updates their details on Clerk, we must sync that user into our Convex database.

1.  **Create Webhook in Clerk**:
    *   In your **Clerk Dashboard**, navigate to **Webhooks** on the left menu.
    *   Click **Add Endpoint**.
    *   For **Endpoint URL**, enter your Convex HTTP deployment endpoint followed by `/clerk-users-webhook`.
        *   *Where is this?* It is based on your `NEXT_PUBLIC_CONVEX_URL` but with `.site` instead of `.cloud`.
        *   Example: If `NEXT_PUBLIC_CONVEX_URL` is `https://happy-rabbit-123.convex.cloud`, your webhook URL is:
            ```text
            https://happy-rabbit-123.convex.site/clerk-users-webhook
            ```
    *   Under **Message Filtering (Events)**, select:
        *   `user.created`
        *   `user.updated`
    *   Click **Create**.
2.  **Copy Webhook Signing Secret**:
    *   Locate the **Signing Secret** on the right side of the created webhook (starts with `whsec_...`).
    *   Copy the secret.
3.  **Add to Local Configuration**:
    *   Open `d:\ABAN\qubis\.env.local` and add it:
        ```env
        CLERK_WEBHOOK_SECRET=whsec_...
        ```
4.  **Add to Convex Settings** (*CRITICAL STEP*):
    *   Go back to your [Convex Dashboard](https://dashboard.convex.dev) -> **Settings** -> **Environment Variables**.
    *   Click **Add Variable**.
    *   Set the **Name** to `CLERK_WEBHOOK_SECRET` and **Value** to your `whsec_...` key. Click **Save**.

---

## 🏃 Running the Application

Once your configuration variables are set in both `.env.local` and your Convex dashboard, you are ready to launch!

You will need **two terminal tabs** open:

### Terminal 1: Run Convex Compiler
This watches your backend schema and mutations, deploying changes instantly.
```bash
npx convex dev
```

### Terminal 2: Run Next.js Dev Server
This runs the client application.
```bash
npm run dev
```

Open your browser and visit: **[http://localhost:3000](http://localhost:3000)**.
*   You will be redirected to the landing page `/overview`.
*   Click **Get Started** or **Sign Up** to create an account.
*   Upon completing authentication, you'll be redirected to the secure portal `/conversations` where you can start adding friends and chatting in real time!

---

## 🔍 Troubleshooting & Common Pitfalls

*   **Webhook Verification Fails (400 Bad Request)**: Double-check that your `CLERK_WEBHOOK_SECRET` environment variable is identically defined inside **both** your `.env.local` file AND your **Convex Settings Dashboard**. If it's missing on Convex, the serverless database function won't be able to authenticate Clerk's webhooks.
*   **"Unauthorized" during chat actions**: Ensure that `CLERK_JWT_ISSUER_DOMAIN` is set in both places and is identical to the Issuer URL in Clerk's JWT template.
*   **Convex schema out of sync**: If database changes aren't registering, make sure `npx convex dev` is actively running in a terminal tab.
