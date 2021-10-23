import React, { useState } from 'react';
import { AppProvider, Page, Card, Layout, Form, FormLayout, TextField, Button } from '@shopify/polaris';
function App() {
  const params = new URLSearchParams(window.location.search || '')
  const [store, setStore] = useState(`${(params.get('shop') || '').split('.myshopify.com').shift()}`);
  const [apiKey, setApiKey] = useState('');
  const [scopes, setScopes] = useState('read_products');
  const [callbackUrl, setCallbackUrl] = useState('https://shopify.workwithpact.com/')

  return (
    <AppProvider
  i18n={{
    Polaris: {
      ResourceList: {
        sortingLabel: 'Sort by',
        defaultItemSingular: 'item',
        defaultItemPlural: 'items',
        showing: 'Showing {itemsCount} {resource}',
        Item: {
          viewItem: 'View details for {itemName}',
        },
      },
      Common: {
        checkbox: 'checkbox',
      },
    },
  }}
>
  <Page>
  <Layout>
    <Layout.Section>
      <Card title={params.get('session') ? 'App installed successfully' : "Install a custom Shopify App"} sectioned>
        {params.get('code') || params.get('session') ? 
          params.get('code') ? <p>Congrats, your app should be installed!</p> : <><p>This app has been successfully installed!</p><p>While this app has no admin controls, it is indeed being used, most likely to augment your store with some features, through the use of an App Proxy.</p><p>If you have any question, please reach out to your developper team</p></>
        :
        <>
          <p>Simply fill out the form, click submit, and if you set your stuff up well, it'll all magically work :)</p>
          <Form onSubmit={() => {
            if (!store.trim() || !apiKey.trim()) {
              return
            }
            window.location.href = `https://${store}.myshopify.com/admin/oauth/authorize?client_id=${apiKey}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(callbackUrl)}&state=${(new Date()).getTime()}&grant_options[]=per_user`
          }}>
          <FormLayout>

          <TextField
              value={store}
              onChange={(value) => setStore(value)}
              label="Store URL"
              type="text"
              suffix=".myshopify.com"
            />
            <TextField
              value={apiKey}
              onChange={(value) => setApiKey(value)}
              label="App Key"
              type="text"
            />
            <TextField
              value={scopes}
              onChange={(value) => setScopes(value)}
              label="Scopes"
              helpText="Leave as is if unsure."
              type="text"
            />

            <TextField
              value={callbackUrl}
              onChange={(value) => setCallbackUrl(value)}
              label="Callback URL"
              helpText="Leave as is if unsure. Make sure it matches your app's authorized redirect URI."
              type="text"
            />


            <Button disabled={!(apiKey.trim() && store.trim())} submit>Submit</Button>
          </FormLayout>
        </Form>
        </>
      }
      </Card>
    </Layout.Section>
  </Layout>
  </Page>
</AppProvider>
  );
}

export default App;
