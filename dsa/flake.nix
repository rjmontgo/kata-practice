{
  description = "Flake for storeup dev";

  # need an environment with node
  outputs = { self, nixpkgs }: 
    let
      pkgs = nixpkgs.legacyPackages.x86_64-linux;
    in
    {
      devShells.x86_64-linux.default = pkgs.mkShell {
        buildInputs = with pkgs; [
          deno
        ];
      };
    };
}
