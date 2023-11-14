import { ConfigPage } from '@/components/pages/config-page/config-page';
import { configurationController } from '@/config/infrastructure/configuration-controller';

export default function ConfigSettingsPage() {
  const config = configurationController.getConfig();
  return (
    <main>
      <h1>Configuration settings</h1>
      <ConfigPage initialData={config} />
    </main>
  );
}
