# Output

This field type returns the encrypted value by default.

If `auto_decrypt` is enabled the value will be decrypted by default as well.

### Decrypted

Returns the decrypted value.

```
// Twig usage
{{ entry.example.decrypted }}

// API usage
$entry->example->decrypted;
```

### Hash

Returns a secure hash of the **decrypted** value.

```
// Twig usage
{{ entry.example.hash }}

// API usage
$entry->example->hash;
```