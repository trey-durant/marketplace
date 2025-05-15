import { hasEnvVars } from "@/utils/supabase/check-env-vars";

export default async function Home() {
  return (
    <>
      <main className="flex-1 flex flex-col gap-8 px-4">
        <section>
          <h2 className="font-medium text-xl mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Sign up or log in to your account.</li>
            <li>Browse our curated sales training courses.</li>
            <li>Enroll and start learning from industry experts.</li>
          </ol>
        </section>
        <section>
          <h2 className="font-medium text-xl mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Expert-led training content</li>
            <li>Flexible learning at your pace</li>
            <li>Community support and resources</li>
          </ul>
        </section>
        {/* Optionally, show onboarding steps if needed */}
        {!hasEnvVars && (
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
            <strong>Note:</strong> The app is not fully configured. Please complete setup.
          </div>
        )}
      </main>
    </>
  );
}
